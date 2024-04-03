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
export declare function computeCrashResult(sig: Uint8Array, gameHash: Uint8Array, // This is the hash of the message
houseEdge?: number): number;
export declare function computeCrashDiceResult(sig: Uint8Array, houseEdge: number): number;
export declare function computeBOBRouletteResult(sig: Uint8Array): "black" | "orange" | "bonus";
export declare function computeMineLocations(vxSignature: Uint8Array, revealedCells: Set<number>, // tiles we know are safe
cells: number, // how many cells in total
mines: number): Set<number>;
