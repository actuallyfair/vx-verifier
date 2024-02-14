import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export interface TowerStart {
    amount: Amount | undefined;
    /** how "deep" the game is */
    levels: number;
    choicesPerLevel: number;
    minesPerLevel: number;
    houseEdge: number;
}
export interface TowerMove {
    /** Note, this is 0 index'd */
    choice: number;
}
export interface Tower {
    start?: TowerStart | undefined;
    move?: TowerMove | undefined;
    cashout?: boolean | undefined;
}
export declare const TowerStart: {
    encode(message: TowerStart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TowerStart;
    fromJSON(object: any): TowerStart;
    toJSON(message: TowerStart): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
        levels?: number | undefined;
        choicesPerLevel?: number | undefined;
        minesPerLevel?: number | undefined;
        houseEdge?: number | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
        levels?: number | undefined;
        choicesPerLevel?: number | undefined;
        minesPerLevel?: number | undefined;
        houseEdge?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof TowerStart>]: never; }>(base?: I | undefined): TowerStart;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
        levels?: number | undefined;
        choicesPerLevel?: number | undefined;
        minesPerLevel?: number | undefined;
        houseEdge?: number | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
        levels?: number | undefined;
        choicesPerLevel?: number | undefined;
        minesPerLevel?: number | undefined;
        houseEdge?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof TowerStart>]: never; }>(object: I_1): TowerStart;
};
export declare const TowerMove: {
    encode(message: TowerMove, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TowerMove;
    fromJSON(object: any): TowerMove;
    toJSON(message: TowerMove): unknown;
    create<I extends {
        choice?: number | undefined;
    } & {
        choice?: number | undefined;
    } & { [K in Exclude<keyof I, "choice">]: never; }>(base?: I | undefined): TowerMove;
    fromPartial<I_1 extends {
        choice?: number | undefined;
    } & {
        choice?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "choice">]: never; }>(object: I_1): TowerMove;
};
export declare const Tower: {
    encode(message: Tower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tower;
    fromJSON(object: any): Tower;
    toJSON(message: Tower): unknown;
    create<I extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } | undefined;
        move?: {
            choice?: number | undefined;
        } | undefined;
        cashout?: boolean | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } & {
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & { [K in Exclude<keyof I["start"]["amount"], keyof Amount>]: never; }) | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } & { [K_1 in Exclude<keyof I["start"], keyof TowerStart>]: never; }) | undefined;
        move?: ({
            choice?: number | undefined;
        } & {
            choice?: number | undefined;
        } & { [K_2 in Exclude<keyof I["move"], "choice">]: never; }) | undefined;
        cashout?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Tower>]: never; }>(base?: I | undefined): Tower;
    fromPartial<I_1 extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } | undefined;
        move?: {
            choice?: number | undefined;
        } | undefined;
        cashout?: boolean | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } & {
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & { [K_4 in Exclude<keyof I_1["start"]["amount"], keyof Amount>]: never; }) | undefined;
            levels?: number | undefined;
            choicesPerLevel?: number | undefined;
            minesPerLevel?: number | undefined;
            houseEdge?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["start"], keyof TowerStart>]: never; }) | undefined;
        move?: ({
            choice?: number | undefined;
        } & {
            choice?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["move"], "choice">]: never; }) | undefined;
        cashout?: boolean | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Tower>]: never; }>(object: I_1): Tower;
};
