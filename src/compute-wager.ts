import { assert } from "tsafe";
import * as Wager from "./generated/wager";
import { sha256 } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";

import { Currency } from "./generated/currency";
import {
  DemoFairCoinToss,
  DemoFairCoinToss_Choice,
} from "./generated/wagers/demo-fair-coin-toss";

export function computeRouletteResult(sig: Uint8Array) {
  // Normally you'd hash a signature, but since we're just mod'ing by 37 any bias is irrelevant.
  const n = bytesToNumberBE(sig) % 37n; // There's 37 options.

  const result = Number(n);
  assert(Number.isInteger(result) && result >= 0 && result <= 36);

  return result;
}

export function computeRouletteOutcome(
  sig: Uint8Array,
  w: Wager.RouletteWager
) {
  const result = computeRouletteResult(sig);

  const win = w.numberGuessed === result;

  const profit = win ? w.amount * 2 : -w.amount;

  return {
    result,
    playerProfit: { currency: w.currency, profit },
  };
}

export function computeFairCoinTossResult(sig: Uint8Array) {
  // We're going to hash the signature just to really be sure its fairly distributed
  const hash = sha256(sig);
  const result = hash[0] % 2;
  if (result == 0) {
    return DemoFairCoinToss_Choice.HEADS;
  } else {
    return DemoFairCoinToss_Choice.TAILS;
  }
}

export function computeFairCoinTossOutcome(
  sig: Uint8Array,
  w: DemoFairCoinToss
) {
  const result = computeFairCoinTossResult(sig);

  const win = w.playerChoice === result;

  const profit = win ? 1 : -1;

  return {
    result,
    playerProfit: { currency: Currency.CURRENCY_UNSPECIFIED, amount: profit },
  };
}

export function computeVhempCrashResult(
  sig: Uint8Array,
  nextGameHash: Uint8Array
) {
  const outcomeBytes = hmac(sha256, sig, nextGameHash);

  const n = Number(bytesToNumberBE(outcomeBytes));
  const X = n / 2 ** 256; // uniform distribution between 0 and 1

  return 1 / X;
}
