import _m0 from "protobufjs/minimal";
/** This is for a wager that is a variable-house-edge  multiplayer crash game */
export interface VHEMPCrash {
}
export declare const VHEMPCrash: {
    encode(_: VHEMPCrash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VHEMPCrash;
    fromJSON(_: any): VHEMPCrash;
    toJSON(_: VHEMPCrash): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): VHEMPCrash;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): VHEMPCrash;
};
