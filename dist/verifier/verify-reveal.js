"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const belt_1 = require("../lib/belt");
const buffutils = __importStar(require("../lib/buffutils"));
const get_outcome_1 = __importDefault(require("./get-outcome"));
async function verifyReveal(commitmentResult, wagers, revealResult) {
    if (!commitmentResult) {
        return new Error("no commitment");
    }
    if (commitmentResult.created > revealResult.created) {
        return new Error("commitment made before revealing it");
    }
    const expectedHash = (0, belt_1.sha256hmac)(revealResult.gs_secret, buffutils.fromUint64(commitmentResult.gs_epoch));
    if (!buffutils.equal(expectedHash, revealResult.gs_hash)) {
        return new Error(`gs_hash does not match. gs_hash=${buffutils.toHex(revealResult.gs_hash)} but sha256hmac(${buffutils.toHex(revealResult.gs_secret)}, ${buffutils.toHex(buffutils.fromUint64(commitmentResult.gs_epoch))}) = ${buffutils.toHex(expectedHash)}  `);
    }
    console.log("Expected hash: ", buffutils.toHex(expectedHash), " and got ", buffutils.toHex(revealResult.gs_hash));
    let lastWager;
    const profit = new Map();
    for await (const wager of wagers) {
        console.log("Got wager: ", wager);
        if (lastWager && wager.nonce === lastWager.nonce) {
            if (lastWager.wager_kind == wager.wager_kind &&
                jsonEq(lastWager, wager)) {
                continue;
            }
            console.warn("Error! Reused nonce: ", wager.nonce, " for gs_hash ", revealResult.gs_hash);
        }
        const expectedNonce = lastWager ? lastWager.nonce + 1 : 0;
        if (wager.nonce !== expectedNonce) {
            console.warn("skipped nonce: ", expectedNonce, " for gs_hash ", revealResult.gs_hash);
        }
        const outcome = (0, get_outcome_1.default)(wager.wager_kind, wager.wager, wager.wager_hash);
        if (outcome instanceof Error) {
            console.error("wager=", wager, " got error: ", outcome);
        }
        else {
            let prevProfit = profit.get(outcome.currency) ?? 0;
            profit.set(outcome.currency, prevProfit + outcome.profit);
        }
        console.log("Wager result: ", outcome);
        lastWager = wager;
    }
    console.log("gs seed: ", commitmentResult.gs_hash.toString("hex"), " checks out");
    console.log("Final result: ", profit);
    // console.log("Commitment result: ", commitmentResult);
    // console.log("Got reveal result: ", revealResult);
}
exports.default = verifyReveal;
function jsonEq(a, b) {
    // TODO: this is wrong. Properly sort the keys and shit ...
    return JSON.stringify(a) === JSON.stringify(b);
}
