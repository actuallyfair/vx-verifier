export default function (wagerKind: number, wager: unknown, wagerHash: Uint8Array): Error | {
    result: string;
    profit: number;
    currency: string;
};
