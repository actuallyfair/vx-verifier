import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
/** This is a very simple coin toss with 50/50 odds. Does not have amounts as its just for demo apps */
export interface DemoFairCoinToss {
    playerChoice: DemoFairCoinToss_Choice;
}
export declare enum DemoFairCoinToss_Choice {
    HEADS = 0,
    TAILS = 1,
    UNRECOGNIZED = -1
}
export declare function demoFairCoinToss_ChoiceFromJSON(object: any): DemoFairCoinToss_Choice;
export declare function demoFairCoinToss_ChoiceToJSON(object: DemoFairCoinToss_Choice): string;
export declare const DemoFairCoinToss: {
    encode(message: DemoFairCoinToss, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DemoFairCoinToss;
    fromJSON(object: any): DemoFairCoinToss;
    toJSON(message: DemoFairCoinToss): unknown;
    create<I extends {
        playerChoice?: DemoFairCoinToss_Choice | undefined;
    } & {
        playerChoice?: DemoFairCoinToss_Choice | undefined;
    } & { [K in Exclude<keyof I, "playerChoice">]: never; }>(base?: I | undefined): DemoFairCoinToss;
    fromPartial<I_1 extends {
        playerChoice?: DemoFairCoinToss_Choice | undefined;
    } & {
        playerChoice?: DemoFairCoinToss_Choice | undefined;
    } & { [K_1 in Exclude<keyof I_1, "playerChoice">]: never; }>(object: I_1): DemoFairCoinToss;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
