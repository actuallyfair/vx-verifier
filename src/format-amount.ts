import { Amount } from "./generated/amount";
import { Currency, currencyToJSON } from "./generated/currency";

export function formatAmount(a: Amount) {
  if (a.currency === Currency.BTC) {
    // convert satoshis to btc
    return `${(Math.floor(a.value) / 1e8).toFixed(8)} BTC`;
  }
  if (a.currency === Currency.TBTC) {
    // convert tsatoshis to  tbtc
    return `${(Math.floor(a.value) / 1e8).toFixed(8)} TBTC`;
  }
  if (a.currency === Currency.ETH) {
    // convert gwei to btc
    return `${(Math.floor(a.value) / 1e9).toFixed(9)} ETH`;
  }
  return `${a.value} ${currencyToJSON(a.currency)}`;
}
