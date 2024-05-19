import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export interface Plinko {
    amount: Amount | undefined;
    possibilities: number[];
}
export declare const Plinko: {
    encode(message: Plinko, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Plinko;
    fromJSON(object: any): Plinko;
    toJSON(message: Plinko): unknown;
    create<I extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
        possibilities?: number[] | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
        possibilities?: (number[] & number[] & { [K_1 in Exclude<keyof I["possibilities"], keyof number[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Plinko>]: never; }>(base?: I | undefined): Plinko;
    fromPartial<I_1 extends {
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
        possibilities?: number[] | undefined;
    } & {
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
        possibilities?: (number[] & number[] & { [K_4 in Exclude<keyof I_1["possibilities"], keyof number[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Plinko>]: never; }>(object: I_1): Plinko;
};
