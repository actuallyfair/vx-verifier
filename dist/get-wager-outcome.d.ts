import * as Wager from "./generated/wager";
import { Currency } from "./generated/currency";
import { DemoFairCoinToss, DemoFairCoinToss_Choice } from "./generated/wagers/demo-fair-coin-toss";
export type WagerOutcome = {
    displayName: string;
    playerProfits: Map<Currency, number>;
};
export declare function getResultRoullete(sig: Uint8Array): number;
export declare function getOutcomeRoulette(sig: Uint8Array, w: Wager.RouletteWager): {
    displayName: string;
    playerProfits: Map<Currency, number>;
};
export declare function getResultFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): DemoFairCoinToss_Choice.HEADS | DemoFairCoinToss_Choice.TAILS;
export declare function getOutcomeFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): {
    displayName: string;
    result: {
        value: DemoFairCoinToss_Choice;
    };
    playerProfits: Map<Currency, number>;
};
export declare function getWagerOutcome(sig: Uint8Array, w: Wager.Wager): WagerOutcome;
