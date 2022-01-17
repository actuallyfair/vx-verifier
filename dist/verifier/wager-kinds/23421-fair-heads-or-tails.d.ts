declare type Wager = {
    target: "heads" | "tails";
    amount: number;
    currency?: string;
};
declare const _default: {
    wagerKind: number;
    calculate: (wager: Wager, wagerHash: Uint8Array) => {
        result: string;
        profit: number;
        currency: string;
    };
};
export default _default;
