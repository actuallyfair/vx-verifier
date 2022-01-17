import { sha256, sha256hmac } from "../lib/belt";
import * as buffutils from "../lib/buffutils";
import getOutcome from "./get-outcome";
import type { RevealResult, WagerResult, CommitmentResult } from "./results";
import wagerKinds from "./wager-kinds";

type VerifyResult = Error | void;

export default async function verifyReveal(
  commitmentResult: CommitmentResult | undefined,
  wagers: AsyncIterable<WagerResult>,
  revealResult: RevealResult
): Promise<VerifyResult> {
  if (!commitmentResult) {
    return new Error("no commitment");
  }

  if (commitmentResult.created > revealResult.created) {
    return new Error("commitment made before revealing it");
  }

  const expectedHash = sha256hmac(
    revealResult.gs_secret,
    buffutils.fromUint64(commitmentResult.gs_epoch)
  );

  if (!buffutils.equal(expectedHash, revealResult.gs_hash)) {
    return new Error(
      `gs_hash does not match. gs_hash=${buffutils.toHex(
        revealResult.gs_hash
      )} but sha256hmac(${buffutils.toHex(
        revealResult.gs_secret
      )}, ${buffutils.toHex(
        buffutils.fromUint64(commitmentResult.gs_epoch)
      )}) = ${buffutils.toHex(expectedHash)}  `
    );
  }

  console.log(
    "Expected hash: ",
    buffutils.toHex(expectedHash),
    " and got ",
    buffutils.toHex(revealResult.gs_hash)
  );

  let lastWager: WagerResult | undefined;

  const profit = new Map<string, number>();

  for await (const wager of wagers) {
    console.log("Got wager: ", wager);

    if (lastWager && wager.nonce === lastWager.nonce) {
      if (
        lastWager.wager_kind == wager.wager_kind &&
        jsonEq(lastWager, wager)
      ) {
        continue;
      }
      console.warn(
        "Error! Reused nonce: ",
        wager.nonce,
        " for gs_hash ",
        revealResult.gs_hash
      );
    }

    const expectedNonce = lastWager ? lastWager.nonce + 1 : 0;
    if (wager.nonce !== expectedNonce) {
      console.warn(
        "skipped nonce: ",
        expectedNonce,
        " for gs_hash ",
        revealResult.gs_hash
      );
    }

    const outcome = getOutcome(wager.wager_kind, wager.wager, wager.wager_hash);
    if (outcome instanceof Error) {
      console.error("wager=", wager, " got error: ", outcome);
    } else {
      let prevProfit = profit.get(outcome.currency) ?? 0;
      profit.set(outcome.currency, prevProfit + outcome.profit);
    }
    console.log("Wager result: ", outcome);

    lastWager = wager;
  }

  console.log(
    "gs seed: ",
    commitmentResult.gs_hash.toString("hex"),
    " checks out"
  );

  console.log("Final result: ", profit);

  // console.log("Commitment result: ", commitmentResult);
  // console.log("Got reveal result: ", revealResult);
}

function jsonEq(a: unknown, b: unknown) {
  // TODO: this is wrong. Properly sort the keys and shit ...
  return JSON.stringify(a) === JSON.stringify(b);
}
