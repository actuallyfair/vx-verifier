import fairHeadsAndTails from "./wager-kinds/23421-fair-heads-or-tails";
///

type CalculateFunction = (
  wager: any,
  wagerHash: Uint8Array
) => { result: string; profit: number; currency: string };

export default new Map<number, CalculateFunction>([
  [fairHeadsAndTails.wagerKind, fairHeadsAndTails.calculate],
]);
