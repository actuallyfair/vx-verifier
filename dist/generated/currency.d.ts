export declare enum Currency {
    CURRENCY_UNSPECIFIED = 0,
    /** BTC - Bitcoin. Provide the value in full bitcoin, not satoshis. */
    BTC = 1,
    /** TBTC - Test bitcoin. Provide the value in full bitcoin, not satoshis. */
    TBTC = 2,
    /** ETH - Ethereum. Provide the value in full Ethereum */
    ETH = 3,
    UNRECOGNIZED = -1
}
export declare function currencyFromJSON(object: any): Currency;
export declare function currencyToJSON(object: Currency): string;
