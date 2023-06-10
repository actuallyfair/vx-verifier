import _m0 from "protobufjs/minimal";
export interface StandardDerivation {
    commitmentPreimage: Uint8Array;
    playerSeed: string;
}
export interface RevealContext {
    standardDerivation?: StandardDerivation | undefined;
}
export declare const StandardDerivation: {
    encode(message: StandardDerivation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StandardDerivation;
    fromJSON(object: any): StandardDerivation;
    toJSON(message: StandardDerivation): unknown;
    create<I extends {
        commitmentPreimage?: Uint8Array | undefined;
        playerSeed?: string | undefined;
    } & {
        commitmentPreimage?: Uint8Array | undefined;
        playerSeed?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StandardDerivation>]: never; }>(base?: I | undefined): StandardDerivation;
    fromPartial<I_1 extends {
        commitmentPreimage?: Uint8Array | undefined;
        playerSeed?: string | undefined;
    } & {
        commitmentPreimage?: Uint8Array | undefined;
        playerSeed?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StandardDerivation>]: never; }>(object: I_1): StandardDerivation;
};
export declare const RevealContext: {
    encode(message: RevealContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevealContext;
    fromJSON(object: any): RevealContext;
    toJSON(message: RevealContext): unknown;
    create<I extends {
        standardDerivation?: {
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } | undefined;
    } & {
        standardDerivation?: ({
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } & {
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } & { [K in Exclude<keyof I["standardDerivation"], keyof StandardDerivation>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "standardDerivation">]: never; }>(base?: I | undefined): RevealContext;
    fromPartial<I_1 extends {
        standardDerivation?: {
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } | undefined;
    } & {
        standardDerivation?: ({
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } & {
            commitmentPreimage?: Uint8Array | undefined;
            playerSeed?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["standardDerivation"], keyof StandardDerivation>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "standardDerivation">]: never; }>(object: I_1): RevealContext;
};
