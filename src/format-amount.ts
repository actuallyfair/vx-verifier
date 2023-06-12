import { Amount } from "./generated/amount";
import { Currency, currencyToJSON } from "./generated/currency";

export function formatAmount(a: Amount) {
  return `${a.value} ${currencyToJSON(a.currency)}`;
}
