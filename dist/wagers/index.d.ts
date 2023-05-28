import _m0 from "protobufjs/minimal";
import { DemoFairCoinToss } from "./demo_fair_coin_toss";
export declare const protobufPackage = "wagers";
/** Define an enumeration for types of currencies. */
export declare enum Currency {
    CURRENCY_UNSPECIFIED = 0,
    /** BTC - Bitcoin */
    BTC = 1,
    UNRECOGNIZED = -1
}
export declare function currencyFromJSON(object: any): Currency;
export declare function currencyToJSON(object: Currency): string;
export interface RockPaperScissorsWager {
    /** The player's choice. */
    playerChoice: RockPaperScissorsWager_Choice;
}
export declare enum RockPaperScissorsWager_Choice {
    ROCK = 0,
    PAPER = 1,
    SCISSORS = 2,
    UNRECOGNIZED = -1
}
export declare function rockPaperScissorsWager_ChoiceFromJSON(object: any): RockPaperScissorsWager_Choice;
export declare function rockPaperScissorsWager_ChoiceToJSON(object: RockPaperScissorsWager_Choice): string;
export interface DiceWager {
    /** The number that the roll must beat. */
    numberToBeat: number;
}
/** This is a simple example wager. A person */
export interface RouletteWager {
    /** The number that the player guesses. */
    numberGuessed: number;
    /** how much did they bet */
    amount: number;
    currency: Currency;
}
export interface Wager {
    rockPaperScissors?: RockPaperScissorsWager | undefined;
    diceWager?: DiceWager | undefined;
    rouletteWager?: RouletteWager | undefined;
    demoFairCoinToss?: DemoFairCoinToss | undefined;
}
export declare const RockPaperScissorsWager: {
    encode(message: RockPaperScissorsWager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RockPaperScissorsWager;
    fromJSON(object: any): RockPaperScissorsWager;
    toJSON(message: RockPaperScissorsWager): unknown;
    create<I extends {
        playerChoice?: RockPaperScissorsWager_Choice | undefined;
    } & {
        playerChoice?: RockPaperScissorsWager_Choice | undefined;
    } & { [K in Exclude<keyof I, "playerChoice">]: never; }>(base?: I | undefined): RockPaperScissorsWager;
    fromPartial<I_1 extends {
        playerChoice?: RockPaperScissorsWager_Choice | undefined;
    } & {
        playerChoice?: RockPaperScissorsWager_Choice | undefined;
    } & { [K_1 in Exclude<keyof I_1, "playerChoice">]: never; }>(object: I_1): RockPaperScissorsWager;
};
export declare const DiceWager: {
    encode(message: DiceWager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DiceWager;
    fromJSON(object: any): DiceWager;
    toJSON(message: DiceWager): unknown;
    create<I extends {
        numberToBeat?: number | undefined;
    } & {
        numberToBeat?: number | undefined;
    } & { [K in Exclude<keyof I, "numberToBeat">]: never; }>(base?: I | undefined): DiceWager;
    fromPartial<I_1 extends {
        numberToBeat?: number | undefined;
    } & {
        numberToBeat?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "numberToBeat">]: never; }>(object: I_1): DiceWager;
};
export declare const RouletteWager: {
    encode(message: RouletteWager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouletteWager;
    fromJSON(object: any): RouletteWager;
    toJSON(message: RouletteWager): unknown;
    create<I extends {
        numberGuessed?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
    } & {
        numberGuessed?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
    } & { [K in Exclude<keyof I, keyof RouletteWager>]: never; }>(base?: I | undefined): RouletteWager;
    fromPartial<I_1 extends {
        numberGuessed?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
    } & {
        numberGuessed?: number | undefined;
        amount?: number | undefined;
        currency?: Currency | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RouletteWager>]: never; }>(object: I_1): RouletteWager;
};
export declare const Wager: {
    encode(message: Wager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Wager;
    fromJSON(object: any): Wager;
    toJSON(message: Wager): unknown;
    create<I extends {
        rockPaperScissors?: {
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } | undefined;
        diceWager?: {
            numberToBeat?: number | undefined;
        } | undefined;
        rouletteWager?: {
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } | undefined;
        demoFairCoinToss?: {
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } | undefined;
    } & {
        rockPaperScissors?: ({
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } & {
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } & { [K in Exclude<keyof I["rockPaperScissors"], "playerChoice">]: never; }) | undefined;
        diceWager?: ({
            numberToBeat?: number | undefined;
        } & {
            numberToBeat?: number | undefined;
        } & { [K_1 in Exclude<keyof I["diceWager"], "numberToBeat">]: never; }) | undefined;
        rouletteWager?: ({
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } & {
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } & { [K_2 in Exclude<keyof I["rouletteWager"], keyof RouletteWager>]: never; }) | undefined;
        demoFairCoinToss?: ({
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } & { [K_3 in Exclude<keyof I["demoFairCoinToss"], "playerChoice">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Wager>]: never; }>(base?: I | undefined): Wager;
    fromPartial<I_1 extends {
        rockPaperScissors?: {
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } | undefined;
        diceWager?: {
            numberToBeat?: number | undefined;
        } | undefined;
        rouletteWager?: {
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } | undefined;
        demoFairCoinToss?: {
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } | undefined;
    } & {
        rockPaperScissors?: ({
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } & {
            playerChoice?: RockPaperScissorsWager_Choice | undefined;
        } & { [K_5 in Exclude<keyof I_1["rockPaperScissors"], "playerChoice">]: never; }) | undefined;
        diceWager?: ({
            numberToBeat?: number | undefined;
        } & {
            numberToBeat?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["diceWager"], "numberToBeat">]: never; }) | undefined;
        rouletteWager?: ({
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } & {
            numberGuessed?: number | undefined;
            amount?: number | undefined;
            currency?: Currency | undefined;
        } & { [K_7 in Exclude<keyof I_1["rouletteWager"], keyof RouletteWager>]: never; }) | undefined;
        demoFairCoinToss?: ({
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./demo_fair_coin_toss").DemoFairCoinToss_Choice | undefined;
        } & { [K_8 in Exclude<keyof I_1["demoFairCoinToss"], "playerChoice">]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Wager>]: never; }>(object: I_1): Wager;
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
