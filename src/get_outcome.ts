import { assert } from "tsafe";
import * as Wagers from "./lib/wagers.generated";
import {} from "@noble/curves/bls12-381";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";

function getResultRoullete(hash: Uint8Array) {
  const n = bytesToNumberBE(hash) % 37n; // There's 37 options.

  const result = Number(n);
  assert(Number.isInteger(result) && result >= 0 && result <= 36);

  return result;
}

function getOutcomeRoulette(hash: Uint8Array, w: Wagers.RouletteWager) {
  const result = getResultRoullete(hash);

  const win = w.numberGuessed === result;

  return {
    result,
    profit: { amount: win ? w.amount * 2 : -w.amount, currency: w.currency },
  };
}

function getOutcome(hash: Uint8Array, w: Wagers.Wager) {
  assert(w);
  if (w.diceWager) {
  } else if (w.rockPaperScissors) {
  } else if (w.rouletteWager) {
    return getOutcomeRoulette(hash, w.rouletteWager);
  } else {
    throw new Error("Unknown wager :/  " + JSON.stringify(w));
  }
}
