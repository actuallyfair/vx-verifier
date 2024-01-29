import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export interface MinesStart {
    amount: Amount | undefined;
    cells: number;
    mines: number;
    /** this is simply how to display the game in rows/comlumns, but has no effect on the game results */
    cellLineBreak: number;
}
export interface MinesMove {
    /** Note, this is 0 index'd */
    cell: number;
}
export interface Mines {
    start?: MinesStart | undefined;
    move?: MinesMove | undefined;
    cashout?: boolean | undefined;
}
export declare const MinesStart: {
    encode(message: MinesStart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinesStart;
    fromJSON(object: any): MinesStart;
    toJSON(message: MinesStart): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        cells?: number | undefined;
        mines?: number | undefined;
        cellLineBreak?: number | undefined;
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
        cells?: number | undefined;
        mines?: number | undefined;
        cellLineBreak?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MinesStart>]: never; }>(base?: I | undefined): MinesStart;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        cells?: number | undefined;
        mines?: number | undefined;
        cellLineBreak?: number | undefined;
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
        cells?: number | undefined;
        mines?: number | undefined;
        cellLineBreak?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MinesStart>]: never; }>(object: I_1): MinesStart;
};
export declare const MinesMove: {
    encode(message: MinesMove, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinesMove;
    fromJSON(object: any): MinesMove;
    toJSON(message: MinesMove): unknown;
    create<I extends {
        cell?: number | undefined;
    } & {
        cell?: number | undefined;
    } & { [K in Exclude<keyof I, "cell">]: never; }>(base?: I | undefined): MinesMove;
    fromPartial<I_1 extends {
        cell?: number | undefined;
    } & {
        cell?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "cell">]: never; }>(object: I_1): MinesMove;
};
export declare const Mines: {
    encode(message: Mines, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mines;
    fromJSON(object: any): Mines;
    toJSON(message: Mines): unknown;
    create<I extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
        } | undefined;
        move?: {
            cell?: number | undefined;
        } | undefined;
        cashout?: boolean | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
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
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
        } & { [K_1 in Exclude<keyof I["start"], keyof MinesStart>]: never; }) | undefined;
        move?: ({
            cell?: number | undefined;
        } & {
            cell?: number | undefined;
        } & { [K_2 in Exclude<keyof I["move"], "cell">]: never; }) | undefined;
        cashout?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Mines>]: never; }>(base?: I | undefined): Mines;
    fromPartial<I_1 extends {
        start?: {
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
        } | undefined;
        move?: {
            cell?: number | undefined;
        } | undefined;
        cashout?: boolean | undefined;
    } & {
        start?: ({
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
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
            cells?: number | undefined;
            mines?: number | undefined;
            cellLineBreak?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["start"], keyof MinesStart>]: never; }) | undefined;
        move?: ({
            cell?: number | undefined;
        } & {
            cell?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["move"], "cell">]: never; }) | undefined;
        cashout?: boolean | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Mines>]: never; }>(object: I_1): Mines;
};
