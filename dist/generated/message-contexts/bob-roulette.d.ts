import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
/** This is for a wager that is a orange, black or bonus  multiplayer roulette game */
export interface BOBRoulette {
    blackBets: BOBRoulette_Bet[];
    orangeBets: BOBRoulette_Bet[];
    bonusBets: BOBRoulette_Bet[];
}
export interface BOBRoulette_Bet {
    uname: string;
    amount: Amount | undefined;
}
export declare const BOBRoulette: {
    encode(message: BOBRoulette, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BOBRoulette;
    fromJSON(object: any): BOBRoulette;
    toJSON(message: BOBRoulette): unknown;
    create<I extends {
        blackBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
        orangeBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
        bonusBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        blackBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K in Exclude<keyof I["blackBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["blackBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_2 in Exclude<keyof I["blackBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        orangeBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_3 in Exclude<keyof I["orangeBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["orangeBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_5 in Exclude<keyof I["orangeBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        bonusBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_6 in Exclude<keyof I["bonusBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["bonusBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_8 in Exclude<keyof I["bonusBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof BOBRoulette>]: never; }>(base?: I | undefined): BOBRoulette;
    fromPartial<I_1 extends {
        blackBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
        orangeBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
        bonusBets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        blackBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_10 in Exclude<keyof I_1["blackBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["blackBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_12 in Exclude<keyof I_1["blackBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        orangeBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["orangeBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["orangeBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_15 in Exclude<keyof I_1["orangeBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        bonusBets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } & { [K_16 in Exclude<keyof I_1["bonusBets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I_1["bonusBets"][number], keyof BOBRoulette_Bet>]: never; })[] & { [K_18 in Exclude<keyof I_1["bonusBets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                oldValue?: number | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof BOBRoulette>]: never; }>(object: I_1): BOBRoulette;
};
export declare const BOBRoulette_Bet: {
    encode(message: BOBRoulette_Bet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BOBRoulette_Bet;
    fromJSON(object: any): BOBRoulette_Bet;
    toJSON(message: BOBRoulette_Bet): unknown;
    create<I extends {
        uname?: string | undefined;
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        uname?: string | undefined;
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof BOBRoulette_Bet>]: never; }>(base?: I | undefined): BOBRoulette_Bet;
    fromPartial<I_1 extends {
        uname?: string | undefined;
        amount?: {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        uname?: string | undefined;
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            oldValue?: number | undefined;
            value?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof BOBRoulette_Bet>]: never; }>(object: I_1): BOBRoulette_Bet;
};
