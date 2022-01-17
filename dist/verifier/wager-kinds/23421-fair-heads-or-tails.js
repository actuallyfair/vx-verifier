"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    wagerKind: 23421,
    calculate: (wager, wagerHash) => {
        const result = wagerHash[0] < 128 ? "heads" : "tails";
        let profit;
        if (result === wager.target) {
            profit = wager.amount;
        }
        else {
            profit = -wager.amount;
        }
        return { result, profit, currency: wager.currency ?? "" };
    },
};
