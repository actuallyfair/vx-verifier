import { Currency } from "./generated/currency";
import { FairCoinToss, FairCoinToss_Choice } from "./generated/message-contexts/fair-coin-toss";
import { MultiRoulette } from "./generated/message-contexts/multi-roulette";
export declare function computeFairCoinTossResult(sig: Uint8Array): FairCoinToss_Choice.HEADS | FairCoinToss_Choice.TAILS;
export declare function computeFairCoinTossOutcome(sig: Uint8Array, w: FairCoinToss): {
    result: FairCoinToss_Choice;
    playerProfit: {
        currency: Currency;
        amount: number;
    };
};
export declare function computeCrashResult(vxSignature: Uint8Array, gameHash: Uint8Array, // This is the hash of the next from the hash chain
houseEdge?: number): number;
export declare function computeCrashDiceResult(sig: Uint8Array, houseEdge: number): number;
export declare function computeMultiRouletteResult(vxSignature: Uint8Array, bet: MultiRoulette): number | undefined;
export declare function computeMineLocations(vxSignature: Uint8Array, revealedCells: Set<number>, // tiles we know are safe
cells: number, // how many cells in total
mines: number): Set<number>;
export declare function computeMinesMultiplier(mines: number, // how many mines in the game
cells: number, // how many cells in total in the game
turn: number, // which turn they have finished
houseEdge?: number): number;
type PlinkoPath = ("L" | "R")[];
export declare function computePinkoPossibilityIndexFromPath(path: PlinkoPath): number;
export declare function computePlinkoPath(vxSignature: Uint8Array, possibilities: number): PlinkoPath;
export declare function computePlinkoPascalsProbabilities(rowNumber: number): number[];
export declare function computePlinkoHouseEdge(possibilities: number[]): number;
export {};
