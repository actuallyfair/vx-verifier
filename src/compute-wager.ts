import { assert } from "tsafe";
import { sha256 } from "@noble/hashes/sha256";
import { hmac } from "@noble/hashes/hmac";
import { bytesToNumberBE } from "@noble/curves/abstract/utils";

import { Currency } from "./generated/currency";
import {
  FairCoinToss,
  FairCoinToss_Choice,
} from "./generated/message-contexts/fair-coin-toss";

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

export function computeVhempCrashResult(
  sig: Uint8Array,
  nextGameHash: Uint8Array
) {
  const outcomeBytes = hmac(sha256, sig, nextGameHash);

  const n = Number(bytesToNumberBE(outcomeBytes));
  const X = n / 2 ** 256; // uniform distribution between 0 and 1

  return 1 / X;
}
