import { assert } from "tsafe";
import * as Wager from "./generated/wager";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";

import { Currency } from "./generated/currency";
import {
  DemoFairCoinToss,
  DemoFairCoinToss_Choice,
  demoFairCoinToss_ChoiceToJSON,
} from "./generated/wagers/demo-fair-coin-toss";

export type WagerOutcome = {
  displayName: string; // displayName of the outcome
  playerProfits: Map<Currency, number>;
};

export function getResultRoullete(sig: Uint8Array) {
  // Normally you'd hash a signature, but since we're just mod'ing by 37 any bias is irrelevant.
  const n = bytesToNumberBE(sig) % 37n; // There's 37 options.

  const result = Number(n);
  assert(Number.isInteger(result) && result >= 0 && result <= 36);

  return result;
}

export function getOutcomeRoulette(sig: Uint8Array, w: Wager.RouletteWager) {
  const result = getResultRoullete(sig);

  const win = w.numberGuessed === result;

  const profit = win ? w.amount * 2 : -w.amount;

  return {
    displayName: result.toString(),
    playerProfits: new Map([[w.currency, profit]]),
  };
}

export function getResultFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss) {
  // We're going to hash the signature just to really be sure its fairly distributed
  const hash = sha256(sig);
  const result = hash[0] % 2;
  if (result == 0) {
    return DemoFairCoinToss_Choice.HEADS;
  } else {
    return DemoFairCoinToss_Choice.TAILS;
  }
}

export function getOutcomeFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss) {
  const result = getResultFairCoinToss(sig, w);

  const win = w.playerChoice === result;

  const profit = win ? 1 : 0;

  return {
    displayName: demoFairCoinToss_ChoiceToJSON(result),
    result: {
      value: result,
    },
    playerProfits: new Map([[Currency.CURRENCY_UNSPECIFIED, profit]]),
  };
}

export function getWagerOutcome(sig: Uint8Array, w: Wager.Wager): WagerOutcome {
  assert(w);
  if (w.demoFairCoinToss) {
    return getOutcomeFairCoinToss(sig, w.demoFairCoinToss);
  } else if (w.rockPaperScissors) {
    throw new Error("TODO RPS");
  } else if (w.rouletteWager) {
    return getOutcomeRoulette(sig, w.rouletteWager);
  } else {
    throw new Error("Unknown wager :/  " + JSON.stringify(w));
  }
}
