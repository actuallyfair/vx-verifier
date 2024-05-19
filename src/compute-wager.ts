import { sha256 } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";
import {
  bytesToNumberBE,
  bytesToNumberLE,
  numberToHexUnpadded,
} from "@noble/curves/abstract/utils";

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

// This tell the multiplier if they were alive on turn move
export function computeMinesMultiplier(
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

type PlinkoPath = ("L" | "R")[];

// Return the index of the possibility that was picked by this path
// note that for a path of N, there should always be N+1 possibilities

export function computePinkoPossibilityIndexFromPath(path: PlinkoPath) {
  let index = path.length / 2;
  for (const direction of path) {
    if (direction === "L") {
      index -= 0.5;
    } else if (direction === "R") {
      index += 0.5;
    } else {
      const _: never = direction;
      throw new Error("unrecognized direction: ", direction);
    }
  }
  return index;
}

// return a path (saying 'L' or 'R', where 'L' means go left, and 'R' means going right)
//  of possibilities-1 length
export function computePlinkoPath(
  vxSignature: Uint8Array,
  possibilities: number
): PlinkoPath {
  if (
    !Number.isSafeInteger(possibilities) ||
    possibilities < 2 ||
    possibilities > 256
  ) {
    throw new Error("invalid possibilities ");
  }
  const hash = sha256(vxSignature);

  let n = bytesToNumberBE(hash);

  let ret: ("L" | "R")[] = [];
  for (let i = 0; i < possibilities - 1; i++) {
    ret.push(n % 2n == 0n ? "R" : "L");
    n >>= 1n;
  }
  return ret;
}

export function computePlinkoPascalsProbabilities(rowNumber: number) {
  if (rowNumber === 0) return [];
  if (rowNumber === 1) return [1];

  let lastRow: number[] = [];

  for (let row = 1; row <= rowNumber; row++) {
    let arr: number[] = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(lastRow[col - 1] + lastRow[col]);
      }
    }
    lastRow = arr;
  }

  let sum = 0;
  for (const v of lastRow) {
    sum += v;
  }

  return lastRow.map((v) => v / sum);
}

export function computePlinkoHouseEdge(possibilities: number[]) {
  const odds = computePlinkoPascalsProbabilities(possibilities.length);

  let ev = 1; // you start off by betting everything
  for (let i = 0; i < possibilities.length; i++) {
    ev -= possibilities[i] * odds[i];
  }
  return ev;
}
