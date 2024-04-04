import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";
export interface MultiRoulette {
    outcomes: MultiRoulette_Outcome[];
}
export interface MultiRoulette_Bet {
    uname: string;
    amount: Amount | undefined;
}
export interface MultiRoulette_Outcome {
    multiplier: number;
    probability: number;
    bets: MultiRoulette_Bet[];
}
export declare const MultiRoulette: {
    encode(message: MultiRoulette, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette;
    fromJSON(object: any): MultiRoulette;
    toJSON(message: MultiRoulette): unknown;
    create<I extends {
        outcomes?: {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        outcomes?: ({
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K in Exclude<keyof I["outcomes"][number]["bets"][number]["amount"], keyof Amount>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["outcomes"][number]["bets"][number], keyof MultiRoulette_Bet>]: never; })[] & { [K_2 in Exclude<keyof I["outcomes"][number]["bets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["outcomes"][number], keyof MultiRoulette_Outcome>]: never; })[] & { [K_4 in Exclude<keyof I["outcomes"], keyof {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "outcomes">]: never; }>(base?: I | undefined): MultiRoulette;
    fromPartial<I_1 extends {
        outcomes?: {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        outcomes?: ({
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_6 in Exclude<keyof I_1["outcomes"][number]["bets"][number]["amount"], keyof Amount>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I_1["outcomes"][number]["bets"][number], keyof MultiRoulette_Bet>]: never; })[] & { [K_8 in Exclude<keyof I_1["outcomes"][number]["bets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["outcomes"][number], keyof MultiRoulette_Outcome>]: never; })[] & { [K_10 in Exclude<keyof I_1["outcomes"], keyof {
            multiplier?: number | undefined;
            probability?: number | undefined;
            bets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("../currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "outcomes">]: never; }>(object: I_1): MultiRoulette;
};
export declare const MultiRoulette_Bet: {
    encode(message: MultiRoulette_Bet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette_Bet;
    fromJSON(object: any): MultiRoulette_Bet;
    toJSON(message: MultiRoulette_Bet): unknown;
    create<I extends {
        uname?: string | undefined;
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        uname?: string | undefined;
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Amount>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MultiRoulette_Bet>]: never; }>(base?: I | undefined): MultiRoulette_Bet;
    fromPartial<I_1 extends {
        uname?: string | undefined;
        amount?: {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } | undefined;
    } & {
        uname?: string | undefined;
        amount?: ({
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & {
            currency?: import("../currency").Currency | undefined;
            value?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], keyof Amount>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MultiRoulette_Bet>]: never; }>(object: I_1): MultiRoulette_Bet;
};
export declare const MultiRoulette_Outcome: {
    encode(message: MultiRoulette_Outcome, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette_Outcome;
    fromJSON(object: any): MultiRoulette_Outcome;
    toJSON(message: MultiRoulette_Outcome): unknown;
    create<I extends {
        multiplier?: number | undefined;
        probability?: number | undefined;
        bets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        multiplier?: number | undefined;
        probability?: number | undefined;
        bets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & { [K in Exclude<keyof I["bets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["bets"][number], keyof MultiRoulette_Bet>]: never; })[] & { [K_2 in Exclude<keyof I["bets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MultiRoulette_Outcome>]: never; }>(base?: I | undefined): MultiRoulette_Outcome;
    fromPartial<I_1 extends {
        multiplier?: number | undefined;
        probability?: number | undefined;
        bets?: {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        multiplier?: number | undefined;
        probability?: number | undefined;
        bets?: ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[] & ({
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            uname?: string | undefined;
            amount?: ({
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } & { [K_4 in Exclude<keyof I_1["bets"][number]["amount"], keyof Amount>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_1["bets"][number], keyof MultiRoulette_Bet>]: never; })[] & { [K_6 in Exclude<keyof I_1["bets"], keyof {
            uname?: string | undefined;
            amount?: {
                currency?: import("../currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof MultiRoulette_Outcome>]: never; }>(object: I_1): MultiRoulette_Outcome;
};
