import { sha256 } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";

import { Currency } from "./generated/currency";
import {
  FairCoinToss,
  FairCoinToss_Choice,
} from "./generated/message-contexts/fair-coin-toss";
import { bytesToHex } from "@noble/hashes/utils";
import { MultiRoulette } from "./generated/message-contexts/multi-roulette";

export function computeFairCoinTossResult(sig: Uint8Array) {
  // We're going to hash the signature just to really be sure its fairly distributed
  const hash = sha256(sig);
  const result = hash[0] % 2;
  if (result == 0) {
    return FairCoinToss_Choice.HEADS;
  } else {
    return FairCoinToss_Choice.TAILS;
  }
}

export function computeFairCoinTossOutcome(sig: Uint8Array, w: FairCoinToss) {
  const result = computeFairCoinTossResult(sig);

  const win = w.playerChoice === result;

  const profit = win ? 1 : -1;

  return {
    result,
    playerProfit: { currency: Currency.CURRENCY_UNSPECIFIED, amount: profit },
  };
}

function doComputeCrashResult(hash: Uint8Array, houseEdge: number) {
  const nBits = 52;
  const hashHex = bytesToHex(hash);

  const seed = hashHex.slice(0, nBits / 4);
  const r = Number.parseInt(seed, 16);

  let X = r / 2 ** nBits; // uniformly distributed in [0; 1)
  let Y = 1 - X; // Now it's uniformly distributed in (0; 1], so it's safe to divide by it

  let result = (1 - houseEdge) / Y;

  result = Math.floor(result * 100) / 100;

  result = Math.max(1, result);

  return result;
}

export function computeCrashResult(
  vxSignature: Uint8Array,
  gameHash: Uint8Array, // This is the hash of the next from the hash chain
  houseEdge: number = 0
) {
  return doComputeCrashResult(hmac(sha256, vxSignature, gameHash), houseEdge);
}

export function computeCrashDiceResult(sig: Uint8Array, houseEdge: number) {
  return doComputeCrashResult(sha256(sig), houseEdge);
}

// returns the index of which roulette outcome was picked
export function computeMultiRouletteResult(
  vxSignature: Uint8Array,
  bet: MultiRoulette
) {
  const hash = sha256(vxSignature);

  const nBits = 52;
  const hashHex = bytesToHex(hash);
  const seed = hashHex.slice(0, nBits / 4);
  const n = Number.parseInt(seed, 16);

  const v = n / 2 ** nBits; // uniform in [0; 1)

  let probabilitySum = 0;

  for (let i = 0; i < bet.outcomes.length; i++) {
    probabilitySum += bet.outcomes[i].probability;
    if (v < probabilitySum) {
      return i;
    }
  }
}

export function computeMineLocations(
  vxSignature: Uint8Array,
  revealedCells: Set<number>, // tiles we know are safe
  cells: number, // how many cells in total
  mines: number // how many mines there are going to be in total
) {
  let mineLocations = new Set<number>();

  for (let m = 0; m < mines; m++) {
    const cellsLeft = cells - revealedCells.size - mineLocations.size;

    if (cellsLeft <= 0) {
      console.warn(
        "Trying to place more mines than there are available locations."
      );
      break;
    }

    let mineIndex = Number(bytesToNumberBE(vxSignature) % BigInt(cellsLeft));
    let adjustedIndex = 0;

    for (let i = 0; i < cells; i++) {
      if (revealedCells.has(i) || mineLocations.has(i)) continue;

      if (adjustedIndex === mineIndex) {
        mineLocations.add(i);
        break;
      }
      adjustedIndex++;
    }
  }

  return mineLocations;
}

export function computeMinesResult(
  mines: number, // how many mines in the game
  cells: number, // how many cells in total in the game
  turn: number, // which turn they have finished
  houseEdge: number = 0.01
): number {
  if (!Number.isSafeInteger(turn) || turn < 0) {
    throw new Error("Turn must be an integer >= 0");
  }

  // On the 0th bet, they have made:
  let accum = 1 - houseEdge;

  // all the turns  are effectively 0 edge
  for (let t = 1; t <= turn; t++) {
    const loseProb = mines / (cells - t + 1);
    const winProb = 1 - loseProb;

    // EV formula tells us [for betting 1 unit]
    // as it's 0 house edge
    // 0 == winProb * profit - loseProb

    // rearranged:
    const profit = loseProb / winProb;
    const multplier = 1 + profit;

    // and we need to stack it on top of their last bet:

    accum *= multplier;
  }

  return Math.floor(accum * 100) / 100;
}
