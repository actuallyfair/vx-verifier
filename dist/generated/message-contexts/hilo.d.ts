import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export declare enum Card {
    Ace = 0,
    Two = 1,
    Three = 2,
    Four = 3,
    Five = 4,
    Six = 5,
    Seven = 6,
    Eight = 7,
    Nine = 8,
    Ten = 9,
    Jack = 10,
    Queen = 11,
    King = 12,
    UNRECOGNIZED = -1
}
export declare function cardFromJSON(object: any): Card;
export declare function cardToJSON(object: Card): string;
export interface HiLo {
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
export declare const HiLo: {
    encode(message: HiLo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HiLo;
    fromJSON(object: any): HiLo;
    toJSON(message: HiLo): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } | undefined;
        startingCard?: Card | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
        startingCard?: Card | undefined;
    } & { [K_1 in Exclude<keyof I, keyof HiLo>]: never; }>(base?: I | undefined): HiLo;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } | undefined;
        startingCard?: Card | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: bigint | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
        startingCard?: Card | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof HiLo>]: never; }>(object: I_1): HiLo;
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
