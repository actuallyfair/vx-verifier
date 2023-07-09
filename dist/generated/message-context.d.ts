import _m0 from "protobufjs/minimal";
import { CrashDice } from "./message-contexts/crash-dice";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { VHEMPCrash } from "./message-contexts/vhemp-crash";
export interface MessageContext {
    fairCoinToss?: FairCoinToss | undefined;
    vhempCrash?: VHEMPCrash | undefined;
    hilo?: HiLo | undefined;
    crashDice?: CrashDice | undefined;
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
    } & { [K_8 in Exclude<keyof I, keyof MessageContext>]: never; }>(base?: I | undefined): MessageContext;
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
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K_9 in Exclude<keyof I_1["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        vhempCrash?: ({} & {} & { [K_10 in Exclude<keyof I_1["vhempCrash"], never>]: never; }) | undefined;
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
                } & { [K_11 in Exclude<keyof I_1["hilo"]["start"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
                startingCard?: import("./message-contexts/hilo").Card | undefined;
            } & { [K_12 in Exclude<keyof I_1["hilo"]["start"], keyof import("./message-contexts/hilo").HiLoStart>]: never; }) | undefined;
            move?: ({
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & {
                playerChoice?: import("./message-contexts/hilo").HiLoMove_Choice | undefined;
                moveIndex?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["hilo"]["move"], keyof import("./message-contexts/hilo").HiLoMove>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["hilo"], keyof HiLo>]: never; }) | undefined;
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
            } & { [K_15 in Exclude<keyof I_1["crashDice"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            target?: number | undefined;
            houseEdge?: number | undefined;
        } & { [K_16 in Exclude<keyof I_1["crashDice"], keyof CrashDice>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof MessageContext>]: never; }>(object: I_1): MessageContext;
};
