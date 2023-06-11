import _m0 from "protobufjs/minimal";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { VHEMPCrash } from "./message-contexts/vhemp-crash";
export interface MessageContext {
    fairCoinToss?: FairCoinToss | undefined;
    vhempCrash?: VHEMPCrash | undefined;
    hilo?: HiLo | undefined;
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
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K in Exclude<keyof I["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        vhempCrash?: ({} & {} & { [K_1 in Exclude<keyof I["vhempCrash"], never>]: never; }) | undefined;
        hilo?: ({
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } & {
            amount?: ({
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } & {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } & { [K_2 in Exclude<keyof I["hilo"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } & { [K_3 in Exclude<keyof I["hilo"], keyof HiLo>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof MessageContext>]: never; }>(base?: I | undefined): MessageContext;
    fromPartial<I_1 extends {
        fairCoinToss?: {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } | undefined;
        vhempCrash?: {} | undefined;
        hilo?: {
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } | undefined;
    } & {
        fairCoinToss?: ({
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & {
            playerChoice?: import("./message-contexts/fair-coin-toss").FairCoinToss_Choice | undefined;
        } & { [K_5 in Exclude<keyof I_1["fairCoinToss"], "playerChoice">]: never; }) | undefined;
        vhempCrash?: ({} & {} & { [K_6 in Exclude<keyof I_1["vhempCrash"], never>]: never; }) | undefined;
        hilo?: ({
            amount?: {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } & {
            amount?: ({
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } & {
                currency?: import("./currency").Currency | undefined;
                value?: bigint | undefined;
            } & { [K_7 in Exclude<keyof I_1["hilo"]["amount"], keyof import("./amount").Amount>]: never; }) | undefined;
            startingCard?: import("./message-contexts/hilo").Card | undefined;
        } & { [K_8 in Exclude<keyof I_1["hilo"], keyof HiLo>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof MessageContext>]: never; }>(object: I_1): MessageContext;
};
