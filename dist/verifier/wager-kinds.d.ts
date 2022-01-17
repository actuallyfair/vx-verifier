declare type CalculateFunction = (wager: any, wagerHash: Uint8Array) => {
    result: string;
    profit: number;
    currency: string;
};
declare const _default: Map<number, CalculateFunction>;
export default _default;
