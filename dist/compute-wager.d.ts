import * as Wager from "./generated/wager";
import { Currency } from "./generated/currency";
import { DemoFairCoinToss, DemoFairCoinToss_Choice } from "./generated/wagers/demo-fair-coin-toss";
export declare function computeRouletteResult(sig: Uint8Array): number;
export declare function computeRouletteOutcome(sig: Uint8Array, w: Wager.RouletteWager): {
    result: number;
    playerProfit: {
        currency: Currency;
        profit: number;
    };
};
export declare function computeFairCoinTossResult(sig: Uint8Array): DemoFairCoinToss_Choice.HEADS | DemoFairCoinToss_Choice.TAILS;
export declare function computeFairCoinTossOutcome(sig: Uint8Array, w: DemoFairCoinToss): {
    result: DemoFairCoinToss_Choice;
    playerProfit: {
        currency: Currency;
        amount: number;
    };
};
export declare function computeVhempCrashResult(sig: Uint8Array, nextGameHash: Uint8Array): number;
