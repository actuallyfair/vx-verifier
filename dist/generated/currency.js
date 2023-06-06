"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyToJSON = exports.currencyFromJSON = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency[Currency["CURRENCY_UNSPECIFIED"] = 0] = "CURRENCY_UNSPECIFIED";
    /** BTC - Bitcoin */
    Currency[Currency["BTC"] = 1] = "BTC";
    Currency[Currency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Currency = exports.Currency || (exports.Currency = {}));
function currencyFromJSON(object) {
    switch (object) {
        case 0:
        case "CURRENCY_UNSPECIFIED":
            return Currency.CURRENCY_UNSPECIFIED;
        case 1:
        case "BTC":
            return Currency.BTC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Currency.UNRECOGNIZED;
    }
}
exports.currencyFromJSON = currencyFromJSON;
function currencyToJSON(object) {
    switch (object) {
        case Currency.CURRENCY_UNSPECIFIED:
            return "CURRENCY_UNSPECIFIED";
        case Currency.BTC:
            return "BTC";
        case Currency.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.currencyToJSON = currencyToJSON;
