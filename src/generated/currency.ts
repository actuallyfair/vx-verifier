/* eslint-disable */

export enum Currency {
  CURRENCY_UNSPECIFIED = 0,
  /** BTC - Bitcoin. The base unit of bitcoin is satoshis. All amounts must be provided in this */
  BTC = 1,
  /** TBTC - Test bitcoin. he base unit of bitcoin is satoshis. */
  TBTC = 2,
  /** ETH - Ethereum. The base unit is gwei. All amounts must be provided in gwei */
  ETH = 3,
  /** HOUSE - The currency that is specific and internal to an individual casino */
  HOUSE = 4,
  /** USD - United States Dollars. Base unit is cents (i.e. 100 is 1 USD) */
  USD = 5,
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
    case 4:
    case "HOUSE":
      return Currency.HOUSE;
    case 5:
    case "USD":
      return Currency.USD;
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
    case Currency.HOUSE:
      return "HOUSE";
    case Currency.USD:
      return "USD";
    case Currency.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
