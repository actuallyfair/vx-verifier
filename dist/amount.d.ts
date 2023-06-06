import { Currency } from "./generated/currency";
export type Amount = {
    amount: number;
    currency: Currency;
};
export declare function formatAmount(a: Amount): string;
