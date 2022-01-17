import { toHex } from "../lib/buffutils";
import wagerKinds from "./wager-kinds";

export default function (
  wagerKind: number,
  wager: unknown,
  wagerHash: Uint8Array
) {
  const calculate = wagerKinds.get(wagerKind);

  if (!calculate) {
    return new Error(
      `could not find calcualte function for wagerkind=${wagerKind}`
    );
  }

  let r;

  try {
    r = calculate(wager, wagerHash);
  } catch (err) {
    console.error(
      "calculate function threw error: ",
      err,
      " for wagerKind=",
      wagerKind,
      " and wager=",
      JSON.stringify(wager),
      " with wagerHash=",
      toHex(wagerHash)
    );
    if (!(err instanceof Error)) {
      throw new Error("calculate threw a non-error?!");
    }
    return err;
  }

  return r;
}
