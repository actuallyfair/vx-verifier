import { Wager } from "./generated/wager";
import { Currency } from "./generated/currency";
export type WagerInfo = {
    kindDisplayName: string;
    displayName: string;
    playerStakes: Map<Currency, number>;
};
export declare function getWagerInfo(w: Wager): WagerInfo;
