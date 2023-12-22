import _m0 from "protobufjs/minimal";
import { BOBRoulette } from "./message-contexts/bob-roulette";
import { CrashDice } from "./message-contexts/crash-dice";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { Mines } from "./message-contexts/mines";
import { VHEMPCrash } from "./message-contexts/vhemp-crash";
export interface MessageContext {
    fairCoinToss?: FairCoinToss | undefined;
    vhempCrash?: VHEMPCrash | undefined;
    hilo?: HiLo | undefined;
    crashDice?: CrashDice | undefined;
    bobRoulette?: BOBRoulette | undefined;
    mines?: Mines | undefined;
}
export declare const MessageContext: {
    encode(message: MessageContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageContext;
    fromJSON(object: any): MessageContext;
    toJSON(message: MessageContext): unknown;
    create<I extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } | undefined;
        vhempCrash?: {} | undefined;
        hilo?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } | undefined;
            move?: {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } | undefined;
        } | undefined;
        crashDice?: {
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } | undefined;
        bobRoulette?: {
            blackBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            orangeBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            bonusBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        mines?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } | undefined;
            move?: {
                cell?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K in Exclude<keyof I["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        vhempCrash?: ({} & {} & { [K_1 in Exclude<keyof I["vhempCrash"], never>]: never; }) | undefined;
        hilo?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } | undefined;
            move?: {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_2 in Exclude<keyof I["hilo"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } & { [K_3 in Exclude<keyof I["hilo"]["start"], keyof import("./message-contexts/hilo").HiLoStart>]: never; }) | undefined;
            move?: ({
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & { [K_4 in Exclude<keyof I["hilo"]["move"], keyof import("./message-contexts/hilo").HiLoMove>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["hilo"], keyof HiLo>]: never; }) | undefined;
        crashDice?: ({
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } & {
            amount?: ({
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } & { [K_6 in Exclude<keyof I["crashDice"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } & { [K_7 in Exclude<keyof I["crashDice"], keyof CrashDice>]: never; }) | undefined;
        bobRoulette?: ({
            blackBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            orangeBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            bonusBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            blackBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_8 in Exclude<keyof I["bobRoulette"]["blackBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["bobRoulette"]["blackBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_10 in Exclude<keyof I["bobRoulette"]["blackBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            orangeBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_11 in Exclude<keyof I["bobRoulette"]["orangeBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["bobRoulette"]["orangeBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_13 in Exclude<keyof I["bobRoulette"]["orangeBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            bonusBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_14 in Exclude<keyof I["bobRoulette"]["bonusBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["bobRoulette"]["bonusBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_16 in Exclude<keyof I["bobRoulette"]["bonusBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["bobRoulette"], keyof BOBRoulette>]: never; }) | undefined;
        mines?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } | undefined;
            move?: {
                cell?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_18 in Exclude<keyof I["mines"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & { [K_19 in Exclude<keyof I["mines"]["start"], keyof import("./message-contexts/mines").MinesStart>]: never; }) | undefined;
            move?: ({
                cell?: number | undefined;
            } & {
                cell?: number | undefined;
            } & { [K_20 in Exclude<keyof I["mines"]["move"], "cell">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_21 in Exclude<keyof I["mines"], keyof Mines>]: never; }) | undefined;
    } & { [K_22 in Exclude<keyof I, keyof MessageContext>]: never; }>(base?: I | undefined): MessageContext;
    fromPartial<I_1 extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } | undefined;
        vhempCrash?: {} | undefined;
        hilo?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } | undefined;
            move?: {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } | undefined;
        } | undefined;
        crashDice?: {
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } | undefined;
        bobRoulette?: {
            blackBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            orangeBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            bonusBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        mines?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } | undefined;
            move?: {
                cell?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K_23 in Exclude<keyof I_1["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        vhempCrash?: ({} & {} & { [K_24 in Exclude<keyof I_1["vhempCrash"], never>]: never; }) | undefined;
        hilo?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } | undefined;
            move?: {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_25 in Exclude<keyof I_1["hilo"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } & { [K_26 in Exclude<keyof I_1["hilo"]["start"], keyof import("./message-contexts/hilo").HiLoStart>]: never; }) | undefined;
            move?: ({
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["hilo"]["move"], keyof import("./message-contexts/hilo").HiLoMove>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I_1["hilo"], keyof HiLo>]: never; }) | undefined;
        crashDice?: ({
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } & {
            amount?: ({
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } & {
                currency?: import("./currency").Currency | undefined;
                value?: number | undefined;
            } & { [K_29 in Exclude<keyof I_1["crashDice"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } & { [K_30 in Exclude<keyof I_1["crashDice"], keyof CrashDice>]: never; }) | undefined;
        bobRoulette?: ({
            blackBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            orangeBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
            bonusBets?: {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            blackBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_31 in Exclude<keyof I_1["bobRoulette"]["blackBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I_1["bobRoulette"]["blackBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_33 in Exclude<keyof I_1["bobRoulette"]["blackBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            orangeBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_34 in Exclude<keyof I_1["bobRoulette"]["orangeBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["bobRoulette"]["orangeBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_36 in Exclude<keyof I_1["bobRoulette"]["orangeBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            bonusBets?: ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[] & ({
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            } & {
                uname?: string | undefined;
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_37 in Exclude<keyof I_1["bobRoulette"]["bonusBets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            } & { [K_38 in Exclude<keyof I_1["bobRoulette"]["bonusBets"][number], keyof import("./message-contexts/bob-roulette").BOBRoulette_Bet>]: never; })[] & { [K_39 in Exclude<keyof I_1["bobRoulette"]["bonusBets"], keyof {
                uname?: string | undefined;
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_40 in Exclude<keyof I_1["bobRoulette"], keyof BOBRoulette>]: never; }) | undefined;
        mines?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } | undefined;
            move?: {
                cell?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_41 in Exclude<keyof I_1["mines"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & { [K_42 in Exclude<keyof I_1["mines"]["start"], keyof import("./message-contexts/mines").MinesStart>]: never; }) | undefined;
            move?: ({
                cell?: number | undefined;
            } & {
                cell?: number | undefined;
            } & { [K_43 in Exclude<keyof I_1["mines"]["move"], "cell">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_44 in Exclude<keyof I_1["mines"], keyof Mines>]: never; }) | undefined;
    } & { [K_45 in Exclude<keyof I_1, keyof MessageContext>]: never; }>(object: I_1): MessageContext;
};
