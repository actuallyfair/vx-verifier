import { assert } from "tsafe";
import * as Wagers from "./lib/wagers.generated";
import {} from "@noble/curves/bls12-381";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";
import {
  DemoFairCoinToss,
  DemoFairCoinToss_Choice,
} from "./wagers/demo_fair_coin_toss";
import { Currency } from "./wagers";

export function getResultRoullete(hash: Uint8Array) {
  const n = bytesToNumberBE(hash) % 37n; // There's 37 options.

  const result = Number(n);
  assert(Number.isInteger(result) && result >= 0 && result <= 36);

  return result;
}

export function getOutcomeRoulette(hash: Uint8Array, w: Wagers.RouletteWager) {
  const result = getResultRoullete(hash);

  const win = w.numberGuessed === result;

  return {
    result,
    profit: { amount: win ? w.amount * 2 : -w.amount, currency: w.currency },
  };
}

export function getResultFairCoinToss(hash: Uint8Array, w: DemoFairCoinToss) {
  const result = hash[0] % 2;
  if (result == 0) {
    return DemoFairCoinToss_Choice.HEADS;
  } else {
    return DemoFairCoinToss_Choice.TAILS;
  }
}

export function getOutcomeFairCoinToss(hash: Uint8Array, w: DemoFairCoinToss) {
  const result = getResultFairCoinToss(hash, w);

  const win = w.playerChoice === result;

  return {
    result,
    profit: { amount: win ? 1 : -0, currency: Currency.CURRENCY_UNSPECIFIED },
  };
}

export function getOutcome(hash: Uint8Array, w: Wagers.Wager) {
  assert(w);
  if (w.demoFairCoinToss) {
    return getOutcomeFairCoinToss(hash, w.demoFairCoinToss);
  } else if (w.rockPaperScissors) {
  } else if (w.rouletteWager) {
    return getOutcomeRoulette(hash, w.rouletteWager);
  } else {
    throw new Error("Unknown wager :/  " + JSON.stringify(w));
  }
}
