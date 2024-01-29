import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export interface CrashDice {
    amount: Amount | undefined;
    target: number;
    houseEdge: number;
}
export declare const CrashDice: {
    encode(message: CrashDice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CrashDice;
    fromJSON(object: any): CrashDice;
    toJSON(message: CrashDice): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        target?: number | undefined;
        houseEdge?: number | undefined;
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
        target?: number | undefined;
        houseEdge?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CrashDice>]: never; }>(base?: I | undefined): CrashDice;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
        target?: number | undefined;
        houseEdge?: number | undefined;
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
        target?: number | undefined;
        houseEdge?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CrashDice>]: never; }>(object: I_1): CrashDice;
};
