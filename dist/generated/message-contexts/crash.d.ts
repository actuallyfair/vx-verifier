import _m0 from "protobufjs/minimal";
/** This is for a wager that is multiplayer crash game */
export interface Crash {
    /** This should be 0 for variable / undefined house edge */
    houseEdge: number;
}
export declare const Crash: {
    encode(message: Crash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Crash;
    fromJSON(object: any): Crash;
    toJSON(message: Crash): unknown;
    create<I extends {
        houseEdge?: number | undefined;
    } & {
        houseEdge?: number | undefined;
    } & { [K in Exclude<keyof I, "houseEdge">]: never; }>(base?: I | undefined): Crash;
    fromPartial<I_1 extends {
        houseEdge?: number | undefined;
    } & {
        houseEdge?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "houseEdge">]: never; }>(object: I_1): Crash;
};
