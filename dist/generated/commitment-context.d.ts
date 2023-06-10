import _m0 from "protobufjs/minimal";
/** this is a pretty standard */
export interface Sha256Commitment {
}
/** for multiplayer games like crash */
export interface Sha256Chain {
}
export interface CommitmentContext {
    sha256Commitment?: Sha256Commitment | undefined;
    sha256Chain?: Sha256Chain | undefined;
}
export declare const Sha256Commitment: {
    encode(_: Sha256Commitment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sha256Commitment;
    fromJSON(_: any): Sha256Commitment;
    toJSON(_: Sha256Commitment): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Sha256Commitment;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Sha256Commitment;
};
export declare const Sha256Chain: {
    encode(_: Sha256Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sha256Chain;
    fromJSON(_: any): Sha256Chain;
    toJSON(_: Sha256Chain): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Sha256Chain;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Sha256Chain;
};
export declare const CommitmentContext: {
    encode(message: CommitmentContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentContext;
    fromJSON(object: any): CommitmentContext;
    toJSON(message: CommitmentContext): unknown;
    create<I extends {
        sha256Commitment?: {} | undefined;
        sha256Chain?: {} | undefined;
    } & {
        sha256Commitment?: ({} & {} & { [K in Exclude<keyof I["sha256Commitment"], never>]: never; }) | undefined;
        sha256Chain?: ({} & {} & { [K_1 in Exclude<keyof I["sha256Chain"], never>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CommitmentContext>]: never; }>(base?: I | undefined): CommitmentContext;
    fromPartial<I_1 extends {
        sha256Commitment?: {} | undefined;
        sha256Chain?: {} | undefined;
    } & {
        sha256Commitment?: ({} & {} & { [K_3 in Exclude<keyof I_1["sha256Commitment"], never>]: never; }) | undefined;
        sha256Chain?: ({} & {} & { [K_4 in Exclude<keyof I_1["sha256Chain"], never>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof CommitmentContext>]: never; }>(object: I_1): CommitmentContext;
};
