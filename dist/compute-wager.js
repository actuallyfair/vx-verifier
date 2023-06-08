"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeVhempCrashResult = exports.computeFairCoinTossOutcome = exports.computeFairCoinTossResult = exports.computeRouletteOutcome = exports.computeRouletteResult = void 0;
const tsafe_1 = require("tsafe");
const sha256_1 = require("@noble/hashes/sha256");
const hmac_1 = require("@noble/hashes/hmac");
const utils_1 = require("@noble/curves/abstract/utils");
const currency_1 = require("./generated/currency");
const demo_fair_coin_toss_1 = require("./generated/wagers/demo-fair-coin-toss");
function computeRouletteResult(sig) {
    // Normally you'd hash a signature, but since we're just mod'ing by 37 any bias is irrelevant.
    const n = (0, utils_1.bytesToNumberBE)(sig) % 37n; // There's 37 options.
    const result = Number(n);
    (0, tsafe_1.assert)(Number.isInteger(result) && result >= 0 && result <= 36);
    return result;
}
exports.computeRouletteResult = computeRouletteResult;
function computeRouletteOutcome(sig, w) {
    const result = computeRouletteResult(sig);
    const win = w.numberGuessed === result;
    const profit = win ? w.amount * 2 : -w.amount;
    return {
        result,
        playerProfit: { currency: w.currency, profit },
    };
}
exports.computeRouletteOutcome = computeRouletteOutcome;
function computeFairCoinTossResult(sig) {
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
exports.computeFairCoinTossResult = computeFairCoinTossResult;
function computeFairCoinTossOutcome(sig, w) {
    const result = computeFairCoinTossResult(sig);
    const win = w.playerChoice === result;
    const profit = win ? 1 : -1;
    return {
        result,
        playerProfit: { currency: currency_1.Currency.CURRENCY_UNSPECIFIED, amount: profit },
    };
}
exports.computeFairCoinTossOutcome = computeFairCoinTossOutcome;
function computeVhempCrashResult(sig, nextGameHash) {
    const outcomeBytes = (0, hmac_1.hmac)(sha256_1.sha256, sig, nextGameHash);
    const n = Number((0, utils_1.bytesToNumberBE)(outcomeBytes));
    const X = n / 2 ** 256; // uniform distribution between 0 and 1
    return 1 / X;
}
exports.computeVhempCrashResult = computeVhempCrashResult;
