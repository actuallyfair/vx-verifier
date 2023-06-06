export declare enum Currency {
    CURRENCY_UNSPECIFIED = 0,
    /** BTC - Bitcoin */
    BTC = 1,
    UNRECOGNIZED = -1
}
export declare function currencyFromJSON(object: any): Currency;
export declare function currencyToJSON(object: Currency): string;
