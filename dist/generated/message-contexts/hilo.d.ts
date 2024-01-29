import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export declare enum Card {
    Unknown = 0,
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
    UNRECOGNIZED = -1
}
export declare function cardFromJSON(object: any): Card;
export declare function cardToJSON(object: Card): string;
export interface HiLoStart {
    amount: Amount | undefined;
    startingCard: Card;
}
/** This is based on stakes hilo game */
export interface HiLoMove {
    playerChoice: HiLoMove_Choice;
    moveIndex: number;
}
export declare enum HiLoMove_Choice {
    Hi = 0,
    Lo = 1,
    Skip = 2,
    Cashout = 3,
    UNRECOGNIZED = -1
}
export declare function hiLoMove_ChoiceFromJSON(object: any): HiLoMove_Choice;
export declare function hiLoMove_ChoiceToJSON(object: HiLoMove_Choice): string;
export interface HiLo {
    start?: HiLoStart | undefined;
    move?: HiLoMove | undefined;
}
export declare const HiLoStart: {
    encode(message: HiLoStart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HiLoStart;
    fromJSON(object: any): HiLoStart;
    toJSON(message: HiLoStart): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        startingCard?: Card | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
        startingCard?: Card | undefined;
    } & { [K_1 in Exclude<keyof I, keyof HiLoStart>]: never; }>(base?: I | undefined): HiLoStart;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        startingCard?: Card | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
        startingCard?: Card | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof HiLoStart>]: never; }>(object: I_1): HiLoStart;
};
export declare const HiLoMove: {
    encode(message: HiLoMove, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HiLoMove;
    fromJSON(object: any): HiLoMove;
    toJSON(message: HiLoMove): unknown;
    create<I extends {
        playerChoice?: HiLoMove_Choice | undefined;
        moveIndex?: number | undefined;
    } & {
        playerChoice?: HiLoMove_Choice | undefined;
        moveIndex?: number | undefined;
    } & { [K in Exclude<keyof I, keyof HiLoMove>]: never; }>(base?: I | undefined): HiLoMove;
    fromPartial<I_1 extends {
        playerChoice?: HiLoMove_Choice | undefined;
        moveIndex?: number | undefined;
    } & {
        playerChoice?: HiLoMove_Choice | undefined;
        moveIndex?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof HiLoMove>]: never; }>(object: I_1): HiLoMove;
};
export declare const HiLo: {
    encode(message: HiLo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HiLo;
    fromJSON(object: any): HiLo;
    toJSON(message: HiLo): unknown;
    create<I extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            startingCard?: Card | undefined;
        } | undefined;
        move?: {
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            startingCard?: Card | undefined;
        } & {
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K in Exclude<keyof I["start"]["amount"], keyof Amount>]: never; }) | undefined;
            startingCard?: Card | undefined;
        } & { [K_1 in Exclude<keyof I["start"], keyof HiLoStart>]: never; }) | undefined;
        move?: ({
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } & {
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } & { [K_2 in Exclude<keyof I["move"], keyof HiLoMove>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof HiLo>]: never; }>(base?: I | undefined): HiLo;
    fromPartial<I_1 extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            startingCard?: Card | undefined;
        } | undefined;
        move?: {
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            startingCard?: Card | undefined;
        } & {
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_4 in Exclude<keyof I_1["start"]["amount"], keyof Amount>]: never; }) | undefined;
            startingCard?: Card | undefined;
        } & { [K_5 in Exclude<keyof I_1["start"], keyof HiLoStart>]: never; }) | undefined;
        move?: ({
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } & {
            playerChoice?: HiLoMove_Choice | undefined;
            moveIndex?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["move"], keyof HiLoMove>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof HiLo>]: never; }>(object: I_1): HiLo;
};
