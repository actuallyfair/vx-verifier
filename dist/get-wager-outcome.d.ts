import * as Wagers from "./lib/wagers.generated";
import { Currency } from "./wagers";
import { DemoFairCoinToss, DemoFairCoinToss_Choice } from "./wagers/demo-fair-coin-toss";
export type WagerOutcome = {
    result: {
        value: any;
        displayName: string;
    };
    playerProfit: {
        amount: number;
        currency: Currency;
    };
};
export declare function getResultRoullete(sig: Uint8Array): number;
export declare function getOutcomeRoulette(sig: Uint8Array, w: Wagers.RouletteWager): {
    result: {
        value: number;
        displayName: string;
    };
    playerProfit: {
        amount: number;
        currency: Wagers.Currency;
    };
};
export declare function getResultFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): DemoFairCoinToss_Choice.HEADS | DemoFairCoinToss_Choice.TAILS;
export declare function getOutcomeFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): {
    result: {
        value: DemoFairCoinToss_Choice;
        displayName: string;
    };
    playerProfit: {
        amount: number;
        currency: Currency;
    };
};
export declare function getWagerOutcome(sig: Uint8Array, w: Wagers.Wager): WagerOutcome;
