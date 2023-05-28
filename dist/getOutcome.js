"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutcome = exports.getOutcomeFairCoinToss = exports.getResultFairCoinToss = exports.getOutcomeRoulette = exports.getResultRoullete = void 0;
const tsafe_1 = require("tsafe");
const utils_1 = require("@noble/curves/abstract/utils");
const demo_fair_coin_toss_1 = require("./wagers/demo_fair_coin_toss");
const wagers_1 = require("./wagers");
function getResultRoullete(hash) {
    const n = (0, utils_1.bytesToNumberBE)(hash) % 37n; // There's 37 options.
    const result = Number(n);
    (0, tsafe_1.assert)(Number.isInteger(result) && result >= 0 && result <= 36);
    return result;
}
exports.getResultRoullete = getResultRoullete;
function getOutcomeRoulette(hash, w) {
    const result = getResultRoullete(hash);
    const win = w.numberGuessed === result;
    return {
        result,
        profit: { amount: win ? w.amount * 2 : -w.amount, currency: w.currency },
    };
}
exports.getOutcomeRoulette = getOutcomeRoulette;
function getResultFairCoinToss(hash, w) {
    const result = hash[0] % 2;
    if (result == 0) {
        return demo_fair_coin_toss_1.DemoFairCoinToss_Choice.HEADS;
    }
    else {
        return demo_fair_coin_toss_1.DemoFairCoinToss_Choice.TAILS;
    }
}
exports.getResultFairCoinToss = getResultFairCoinToss;
function getOutcomeFairCoinToss(hash, w) {
    const result = getResultFairCoinToss(hash, w);
    const win = w.playerChoice === result;
    return {
        result,
        profit: { amount: win ? 1 : -0, currency: wagers_1.Currency.CURRENCY_UNSPECIFIED },
    };
}
exports.getOutcomeFairCoinToss = getOutcomeFairCoinToss;
function getOutcome(hash, w) {
    (0, tsafe_1.assert)(w);
    if (w.demoFairCoinToss) {
        return getOutcomeFairCoinToss(hash, w.demoFairCoinToss);
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
exports.getOutcome = getOutcome;
