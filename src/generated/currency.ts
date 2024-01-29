/* eslint-disable */

export enum Currency {
  CURRENCY_UNSPECIFIED = 0,
  /** BTC - Bitcoin. Provide the value in full bitcoin, not satoshis. */
  BTC = 1,
  /** TBTC - Test bitcoin. Provide the value in full bitcoin, not satoshis. */
  TBTC = 2,
  /** ETH - Ethereum. Provide the value in full Ethereum */
  ETH = 3,
  UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case "CURRENCY_UNSPECIFIED":
      return Currency.CURRENCY_UNSPECIFIED;
    case 1:
    case "BTC":
      return Currency.BTC;
    case 2:
    case "TBTC":
      return Currency.TBTC;
    case 3:
    case "ETH":
      return Currency.ETH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Currency.UNRECOGNIZED;
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.CURRENCY_UNSPECIFIED:
      return "CURRENCY_UNSPECIFIED";
    case Currency.BTC:
      return "BTC";
    case Currency.TBTC:
      return "TBTC";
    case Currency.ETH:
      return "ETH";
    case Currency.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
