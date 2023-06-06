"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWagerOutcome = exports.getOutcomeFairCoinToss = exports.getResultFairCoinToss = exports.getOutcomeRoulette = exports.getResultRoullete = void 0;
const tsafe_1 = require("tsafe");
const sha256_1 = require("@noble/hashes/sha256");
const utils_1 = require("@noble/curves/abstract/utils");
const currency_1 = require("./generated/currency");
const demo_fair_coin_toss_1 = require("./generated/wagers/demo-fair-coin-toss");
function getResultRoullete(sig) {
    // Normally you'd hash a signature, but since we're just mod'ing by 37 any bias is irrelevant.
    const n = (0, utils_1.bytesToNumberBE)(sig) % 37n; // There's 37 options.
    const result = Number(n);
    (0, tsafe_1.assert)(Number.isInteger(result) && result >= 0 && result <= 36);
    return result;
}
exports.getResultRoullete = getResultRoullete;
function getOutcomeRoulette(sig, w) {
    const result = getResultRoullete(sig);
    const win = w.numberGuessed === result;
    const profit = win ? w.amount * 2 : -w.amount;
    return {
        displayName: result.toString(),
        playerProfits: new Map([[w.currency, profit]]),
    };
}
exports.getOutcomeRoulette = getOutcomeRoulette;
function getResultFairCoinToss(sig, w) {
    // We're going to hash the signature just to really be sure its fairly distributed
    const hash = (0, sha256_1.sha256)(sig);
    const result = hash[0] % 2;
    if (result == 0) {
        return demo_fair_coin_toss_1.DemoFairCoinToss_Choice.HEADS;
    }
    else {
        return demo_fair_coin_toss_1.DemoFairCoinToss_Choice.TAILS;
    }
}
exports.getResultFairCoinToss = getResultFairCoinToss;
function getOutcomeFairCoinToss(sig, w) {
    const result = getResultFairCoinToss(sig, w);
    const win = w.playerChoice === result;
    const profit = win ? 1 : 0;
    return {
        displayName: (0, demo_fair_coin_toss_1.demoFairCoinToss_ChoiceToJSON)(result),
        result: {
            value: result,
        },
        playerProfits: new Map([[currency_1.Currency.CURRENCY_UNSPECIFIED, profit]]),
    };
}
exports.getOutcomeFairCoinToss = getOutcomeFairCoinToss;
function getWagerOutcome(sig, w) {
    (0, tsafe_1.assert)(w);
    if (w.demoFairCoinToss) {
        return getOutcomeFairCoinToss(sig, w.demoFairCoinToss);
    }
    else if (w.rockPaperScissors) {
        throw new Error("TODO RPS");
    }
    else if (w.rouletteWager) {
        return getOutcomeRoulette(sig, w.rouletteWager);
    }
    else {
        throw new Error("Unknown wager :/  " + JSON.stringify(w));
    }
}
exports.getWagerOutcome = getWagerOutcome;
