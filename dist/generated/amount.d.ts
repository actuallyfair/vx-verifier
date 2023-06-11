import _m0 from "protobufjs/minimal";
import { Currency } from "./currency";
export interface Amount {
    currency: Currency;
    value: bigint;
}
export declare const Amount: {
    encode(message: Amount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Amount;
    fromJSON(object: any): Amount;
    toJSON(message: Amount): unknown;
    create<I extends {
        currency?: Currency | undefined;
        value?: bigint | undefined;
    } & {
        currency?: Currency | undefined;
        value?: bigint | undefined;
    } & { [K in Exclude<keyof I, keyof Amount>]: never; }>(base?: I | undefined): Amount;
    fromPartial<I_1 extends {
        currency?: Currency | undefined;
        value?: bigint | undefined;
    } & {
        currency?: Currency | undefined;
        value?: bigint | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Amount>]: never; }>(object: I_1): Amount;
};
