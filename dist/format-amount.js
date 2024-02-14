"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAmount = void 0;
const currency_1 = require("./generated/currency");
function formatAmount(a) {
    if (a.currency === currency_1.Currency.BTC) {
        // convert satoshis to btc
        return `${(Math.floor(a.value) / 1e8).toFixed(8)} BTC`;
    }
    if (a.currency === currency_1.Currency.TBTC) {
        // convert tsatoshis to  tbtc
        return `${(Math.floor(a.value) / 1e8).toFixed(8)} TBTC`;
    }
    if (a.currency === currency_1.Currency.ETH) {
        // convert gwei to btc
        return `${(Math.floor(a.value) / 1e9).toFixed(9)} ETH`;
    }
    return `${a.value} ${(0, currency_1.currencyToJSON)(a.currency)}`;
}
exports.formatAmount = formatAmount;
