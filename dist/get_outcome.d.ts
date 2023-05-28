import * as Wagers from "./lib/wagers.generated";
export declare function getOutcome(hash: Uint8Array, w: Wagers.Wager): {
    result: number;
    profit: {
        amount: number;
        currency: Wagers.Currency;
    };
} | undefined;
