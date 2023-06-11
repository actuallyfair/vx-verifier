import _m0 from "protobufjs/minimal";
export interface StandardDerivation {
    playerSeed: string;
}
export interface HashChainDerivation {
}
export interface RevealContext {
    standardDerivation?: StandardDerivation | undefined;
    hashChainDerivation?: HashChainDerivation | undefined;
}
export declare const StandardDerivation: {
    encode(message: StandardDerivation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StandardDerivation;
    fromJSON(object: any): StandardDerivation;
    toJSON(message: StandardDerivation): unknown;
    create<I extends {
        playerSeed?: string | undefined;
    } & {
        playerSeed?: string | undefined;
    } & { [K in Exclude<keyof I, "playerSeed">]: never; }>(base?: I | undefined): StandardDerivation;
    fromPartial<I_1 extends {
        playerSeed?: string | undefined;
    } & {
        playerSeed?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "playerSeed">]: never; }>(object: I_1): StandardDerivation;
};
export declare const HashChainDerivation: {
    encode(_: HashChainDerivation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashChainDerivation;
    fromJSON(_: any): HashChainDerivation;
    toJSON(_: HashChainDerivation): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): HashChainDerivation;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): HashChainDerivation;
};
export declare const RevealContext: {
    encode(message: RevealContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RevealContext;
    fromJSON(object: any): RevealContext;
    toJSON(message: RevealContext): unknown;
    create<I extends {
        standardDerivation?: {
            playerSeed?: string | undefined;
        } | undefined;
        hashChainDerivation?: {} | undefined;
    } & {
        standardDerivation?: ({
            playerSeed?: string | undefined;
        } & {
            playerSeed?: string | undefined;
        } & { [K in Exclude<keyof I["standardDerivation"], "playerSeed">]: never; }) | undefined;
        hashChainDerivation?: ({} & {} & { [K_1 in Exclude<keyof I["hashChainDerivation"], never>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof RevealContext>]: never; }>(base?: I | undefined): RevealContext;
    fromPartial<I_1 extends {
        standardDerivation?: {
            playerSeed?: string | undefined;
        } | undefined;
        hashChainDerivation?: {} | undefined;
    } & {
        standardDerivation?: ({
            playerSeed?: string | undefined;
        } & {
            playerSeed?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["standardDerivation"], "playerSeed">]: never; }) | undefined;
        hashChainDerivation?: ({} & {} & { [K_4 in Exclude<keyof I_1["hashChainDerivation"], never>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof RevealContext>]: never; }>(object: I_1): RevealContext;
};
