"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAmount = void 0;
const currency_1 = require("./generated/currency");
function formatAmount(a) {
    return `${a.amount} ${(0, currency_1.currencyToJSON)(a.currency)}`;
}
exports.formatAmount = formatAmount;
