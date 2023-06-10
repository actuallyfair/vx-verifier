import { Currency } from "./generated/currency";
import { FairCoinToss, FairCoinToss_Choice } from "./generated/message-contexts/fair-coin-toss";
export declare function computeFairCoinTossResult(sig: Uint8Array): FairCoinToss_Choice.HEADS | FairCoinToss_Choice.TAILS;
export declare function computeFairCoinTossOutcome(sig: Uint8Array, w: FairCoinToss): {
    result: FairCoinToss_Choice;
    playerProfit: {
        currency: Currency;
        amount: number;
    };
};
export declare function computeVhempCrashResult(sig: Uint8Array, nextGameHash: Uint8Array): number;
