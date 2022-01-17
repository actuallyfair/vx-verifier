"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _23421_fair_heads_or_tails_1 = __importDefault(require("./wager-kinds/23421-fair-heads-or-tails"));
exports.default = new Map([
    [_23421_fair_heads_or_tails_1.default.wagerKind, _23421_fair_heads_or_tails_1.default.calculate],
]);
