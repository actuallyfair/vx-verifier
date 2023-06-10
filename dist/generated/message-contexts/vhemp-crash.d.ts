import _m0 from "protobufjs/minimal";
/** This is for a wager that is a variable-house-edge  multiplayer crash game */
export interface VHEMPCrash {
    gameId: number;
}
export declare const VHEMPCrash: {
    encode(message: VHEMPCrash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VHEMPCrash;
    fromJSON(object: any): VHEMPCrash;
    toJSON(message: VHEMPCrash): unknown;
    create<I extends {
        gameId?: number | undefined;
    } & {
        gameId?: number | undefined;
    } & { [K in Exclude<keyof I, "gameId">]: never; }>(base?: I | undefined): VHEMPCrash;
    fromPartial<I_1 extends {
        gameId?: number | undefined;
    } & {
        gameId?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "gameId">]: never; }>(object: I_1): VHEMPCrash;
};
