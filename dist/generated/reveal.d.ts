import _m0 from "protobufjs/minimal";
export interface StandardDerivation {
    playerSeed: string;
}
export interface Reveal {
    standardDerivation?: StandardDerivation | undefined;
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
export declare const Reveal: {
    encode(message: Reveal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reveal;
    fromJSON(object: any): Reveal;
    toJSON(message: Reveal): unknown;
    create<I extends {
        standardDerivation?: {
            playerSeed?: string | undefined;
        } | undefined;
    } & {
        standardDerivation?: ({
            playerSeed?: string | undefined;
        } & {
            playerSeed?: string | undefined;
        } & { [K in Exclude<keyof I["standardDerivation"], "playerSeed">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "standardDerivation">]: never; }>(base?: I | undefined): Reveal;
    fromPartial<I_1 extends {
        standardDerivation?: {
            playerSeed?: string | undefined;
        } | undefined;
    } & {
        standardDerivation?: ({
            playerSeed?: string | undefined;
        } & {
            playerSeed?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["standardDerivation"], "playerSeed">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "standardDerivation">]: never; }>(object: I_1): Reveal;
};
