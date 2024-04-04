import _m0 from "protobufjs/minimal";
import { Crash } from "./message-contexts/crash";
import { CrashDice } from "./message-contexts/crash-dice";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { Mines } from "./message-contexts/mines";
import { MultiRoulette } from "./message-contexts/multi-roulette";
import { Tower } from "./message-contexts/tower";
export interface MessageContext {
    fairCoinToss?: FairCoinToss | undefined;
    crash?: Crash | undefined;
    hilo?: HiLo | undefined;
    crashDice?: CrashDice | undefined;
    multiRoulette?: MultiRoulette | undefined;
    mines?: Mines | undefined;
    tower?: Tower | undefined;
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
        crash?: {
            houseEdge?: number | undefined;
        } | undefined;
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
        multiRoulette?: {
            outcomes?: {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
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
        tower?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } | undefined;
            move?: {
                choice?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K in Exclude<keyof I["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        crash?: ({
            houseEdge?: number | undefined;
        } & {
            houseEdge?: number | undefined;
        } & { [K_1 in Exclude<keyof I["crash"], "houseEdge">]: never; }) | undefined;
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
        multiRoulette?: ({
            outcomes?: {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
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
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: ({
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
                    } & { [K_8 in Exclude<keyof I["multiRoulette"]["outcomes"][number]["bets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["multiRoulette"]["outcomes"][number]["bets"][number], keyof import("./message-contexts/multi-roulette").MultiRoulette_Bet>]: never; })[] & { [K_10 in Exclude<keyof I["multiRoulette"]["outcomes"][number]["bets"], keyof {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["multiRoulette"]["outcomes"][number], keyof import("./message-contexts/multi-roulette").MultiRoulette_Outcome>]: never; })[] & { [K_12 in Exclude<keyof I["multiRoulette"]["outcomes"], keyof {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["multiRoulette"], "outcomes">]: never; }) | undefined;
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
                } & { [K_14 in Exclude<keyof I["mines"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & { [K_15 in Exclude<keyof I["mines"]["start"], keyof import("./message-contexts/mines").MinesStart>]: never; }) | undefined;
            move?: ({
                cell?: number | undefined;
            } & {
                cell?: number | undefined;
            } & { [K_16 in Exclude<keyof I["mines"]["move"], "cell">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_17 in Exclude<keyof I["mines"], keyof Mines>]: never; }) | undefined;
        tower?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } | undefined;
            move?: {
                choice?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_18 in Exclude<keyof I["tower"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } & { [K_19 in Exclude<keyof I["tower"]["start"], keyof import("./message-contexts/tower").TowerStart>]: never; }) | undefined;
            move?: ({
                choice?: number | undefined;
            } & {
                choice?: number | undefined;
            } & { [K_20 in Exclude<keyof I["tower"]["move"], "choice">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_21 in Exclude<keyof I["tower"], keyof Tower>]: never; }) | undefined;
    } & { [K_22 in Exclude<keyof I, keyof MessageContext>]: never; }>(base?: I | undefined): MessageContext;
    fromPartial<I_1 extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } | undefined;
        crash?: {
            houseEdge?: number | undefined;
        } | undefined;
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
        multiRoulette?: {
            outcomes?: {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
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
        tower?: {
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } | undefined;
            move?: {
                choice?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K_23 in Exclude<keyof I_1["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        crash?: ({
            houseEdge?: number | undefined;
        } & {
            houseEdge?: number | undefined;
        } & { [K_24 in Exclude<keyof I_1["crash"], "houseEdge">]: never; }) | undefined;
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
        multiRoulette?: ({
            outcomes?: {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
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
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: ({
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
                    } & { [K_31 in Exclude<keyof I_1["multiRoulette"]["outcomes"][number]["bets"][number]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                } & { [K_32 in Exclude<keyof I_1["multiRoulette"]["outcomes"][number]["bets"][number], keyof import("./message-contexts/multi-roulette").MultiRoulette_Bet>]: never; })[] & { [K_33 in Exclude<keyof I_1["multiRoulette"]["outcomes"][number]["bets"], keyof {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I_1["multiRoulette"]["outcomes"][number], keyof import("./message-contexts/multi-roulette").MultiRoulette_Outcome>]: never; })[] & { [K_35 in Exclude<keyof I_1["multiRoulette"]["outcomes"], keyof {
                multiplier?: number | undefined;
                probability?: number | undefined;
                bets?: {
                    uname?: string | undefined;
                    amount?: {
                        currency?: import("./currency").Currency | undefined;
                        value?: number | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["multiRoulette"], "outcomes">]: never; }) | undefined;
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
                } & { [K_37 in Exclude<keyof I_1["mines"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                cells?: number | undefined;
                mines?: number | undefined;
                cellLineBreak?: number | undefined;
            } & { [K_38 in Exclude<keyof I_1["mines"]["start"], keyof import("./message-contexts/mines").MinesStart>]: never; }) | undefined;
            move?: ({
                cell?: number | undefined;
            } & {
                cell?: number | undefined;
            } & { [K_39 in Exclude<keyof I_1["mines"]["move"], "cell">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_40 in Exclude<keyof I_1["mines"], keyof Mines>]: never; }) | undefined;
        tower?: ({
            start?: {
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } | undefined;
            move?: {
                choice?: number | undefined;
            } | undefined;
            cashout?: boolean | undefined;
        } & {
            start?: ({
                amount?: {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } & {
                amount?: ({
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & {
                    currency?: import("./currency").Currency | undefined;
                    value?: number | undefined;
                } & { [K_41 in Exclude<keyof I_1["tower"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                levels?: number | undefined;
                choicesPerLevel?: number | undefined;
                minesPerLevel?: number | undefined;
                houseEdge?: number | undefined;
            } & { [K_42 in Exclude<keyof I_1["tower"]["start"], keyof import("./message-contexts/tower").TowerStart>]: never; }) | undefined;
            move?: ({
                choice?: number | undefined;
            } & {
                choice?: number | undefined;
            } & { [K_43 in Exclude<keyof I_1["tower"]["move"], "choice">]: never; }) | undefined;
            cashout?: boolean | undefined;
        } & { [K_44 in Exclude<keyof I_1["tower"], keyof Tower>]: never; }) | undefined;
    } & { [K_45 in Exclude<keyof I_1, keyof MessageContext>]: never; }>(object: I_1): MessageContext;
};
