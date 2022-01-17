"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffutils_1 = require("../lib/buffutils");
const wager_kinds_1 = __importDefault(require("./wager-kinds"));
function default_1(wagerKind, wager, wagerHash) {
    const calculate = wager_kinds_1.default.get(wagerKind);
    if (!calculate) {
        return new Error(`could not find calcualte function for wagerkind=${wagerKind}`);
    }
    let r;
    try {
        r = calculate(wager, wagerHash);
    }
    catch (err) {
        console.error("calculate function threw error: ", err, " for wagerKind=", wagerKind, " and wager=", JSON.stringify(wager), " with wagerHash=", (0, buffutils_1.toHex)(wagerHash));
        if (!(err instanceof Error)) {
            throw new Error("calculate threw a non-error?!");
        }
        return err;
    }
    return r;
}
exports.default = default_1;
