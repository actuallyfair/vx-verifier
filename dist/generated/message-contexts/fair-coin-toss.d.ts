import _m0 from "protobufjs/minimal";
/** This is a very simple coin toss with 50/50 odds. Does not have amounts as its just for demo apps */
export interface FairCoinToss {
    playerChoice: FairCoinToss_Choice;
    nonce: number;
}
export declare enum FairCoinToss_Choice {
    HEADS = 0,
    TAILS = 1,
    UNRECOGNIZED = -1
}
export declare function fairCoinToss_ChoiceFromJSON(object: any): FairCoinToss_Choice;
export declare function fairCoinToss_ChoiceToJSON(object: FairCoinToss_Choice): string;
export declare const FairCoinToss: {
    encode(message: FairCoinToss, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FairCoinToss;
    fromJSON(object: any): FairCoinToss;
    toJSON(message: FairCoinToss): unknown;
    create<I extends {
        playerChoice?: FairCoinToss_Choice | undefined;
        nonce?: number | undefined;
    } & {
        playerChoice?: FairCoinToss_Choice | undefined;
        nonce?: number | undefined;
    } & { [K in Exclude<keyof I, keyof FairCoinToss>]: never; }>(base?: I | undefined): FairCoinToss;
    fromPartial<I_1 extends {
        playerChoice?: FairCoinToss_Choice | undefined;
        nonce?: number | undefined;
    } & {
        playerChoice?: FairCoinToss_Choice | undefined;
        nonce?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FairCoinToss>]: never; }>(object: I_1): FairCoinToss;
};
