export declare enum Currency {
    CURRENCY_UNSPECIFIED = 0,
    /** BTC - Bitcoin. The base unit of bitcoin is satoshis. All amounts must be provided in this */
    BTC = 1,
    /** TBTC - Test bitcoin. he base unit of bitcoin is satoshis. */
    TBTC = 2,
    /** ETH - Ethereum. The base unit is gwei. All amounts must be provided in gwei */
    ETH = 3,
    UNRECOGNIZED = -1
}
export declare function currencyFromJSON(object: any): Currency;
export declare function currencyToJSON(object: Currency): string;
