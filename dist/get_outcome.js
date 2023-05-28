"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsafe_1 = require("tsafe");
const utils_1 = require("@noble/curves/abstract/utils");
function getResultRoullete(hash) {
    const n = (0, utils_1.bytesToNumberBE)(hash) % 37n; // There's 37 options.
    const result = Number(n);
    (0, tsafe_1.assert)(Number.isInteger(result) && result >= 0 && result <= 36);
    return result;
}
function getOutcomeRoulette(hash, w) {
    const result = getResultRoullete(hash);
    const win = w.numberGuessed === result;
    return {
        result,
        profit: { amount: win ? w.amount * 2 : -w.amount, currency: w.currency },
    };
}
function getOutcome(hash, w) {
    (0, tsafe_1.assert)(w);
    if (w.diceWager) {
    }
    else if (w.rockPaperScissors) {
    }
    else if (w.rouletteWager) {
        return getOutcomeRoulette(hash, w.rouletteWager);
    }
    else {
        throw new Error("Unknown wager :/  " + JSON.stringify(w));
    }
}
