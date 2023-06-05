import { Wager } from "./wagers";
export type WagerInfo = {
    kindDisplayName: string;
    displayName: string;
};
export declare function getWagerInfo(w: Wager): WagerInfo;
