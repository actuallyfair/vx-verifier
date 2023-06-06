import { Currency, currencyToJSON } from "./generated/currency";

export type Amount = {
  amount: number;
  currency: Currency;
};

export function formatAmount(a: Amount) {
  return `${a.amount} ${currencyToJSON(a.currency)}`;
}
