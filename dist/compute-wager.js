"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeVhempCrashResult = exports.computeFairCoinTossOutcome = exports.computeFairCoinTossResult = void 0;
const sha256_1 = require("@noble/hashes/sha256");
const hmac_1 = require("@noble/hashes/hmac");
const currency_1 = require("./generated/currency");
const fair_coin_toss_1 = require("./generated/message-contexts/fair-coin-toss");
const utils_1 = require("@noble/hashes/utils");
function computeFairCoinTossResult(sig) {
    // We're going to hash the signature just to really be sure its fairly distributed
    const hash = (0, sha256_1.sha256)(sig);
    const result = hash[0] % 2;
    if (result == 0) {
        return fair_coin_toss_1.FairCoinToss_Choice.HEADS;
    }
    else {
        return fair_coin_toss_1.FairCoinToss_Choice.TAILS;
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
    const nBits = 52;
    const bytes = (0, hmac_1.hmac)(sha256_1.sha256, sig, nextGameHash);
    const seed = bytes.slice(0, nBits / 8);
    const r = Number.parseInt((0, utils_1.bytesToHex)(seed), 16);
    let X = r / 2 ** nBits; // uniformly distributed in [0; 1)
    return 1 / X;
}
exports.computeVhempCrashResult = computeVhempCrashResult;
