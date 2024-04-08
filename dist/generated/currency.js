"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyToJSON = exports.currencyFromJSON = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency[Currency["CURRENCY_UNSPECIFIED"] = 0] = "CURRENCY_UNSPECIFIED";
    /** BTC - Bitcoin. The base unit of bitcoin is satoshis. All amounts must be provided in this */
    Currency[Currency["BTC"] = 1] = "BTC";
    /** TBTC - Test bitcoin. he base unit of bitcoin is satoshis. */
    Currency[Currency["TBTC"] = 2] = "TBTC";
    /** ETH - Ethereum. The base unit is gwei. All amounts must be provided in gwei */
    Currency[Currency["ETH"] = 3] = "ETH";
    /** HOUSE - The currency that is specific and internal to an individual casino */
    Currency[Currency["HOUSE"] = 4] = "HOUSE";
    Currency[Currency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Currency || (exports.Currency = Currency = {}));
function currencyFromJSON(object) {
    switch (object) {
        case 0:
        case "CURRENCY_UNSPECIFIED":
            return Currency.CURRENCY_UNSPECIFIED;
        case 1:
        case "BTC":
            return Currency.BTC;
        case 2:
        case "TBTC":
            return Currency.TBTC;
        case 3:
        case "ETH":
            return Currency.ETH;
        case 4:
        case "HOUSE":
            return Currency.HOUSE;
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
        case Currency.TBTC:
            return "TBTC";
        case Currency.ETH:
            return "ETH";
        case Currency.HOUSE:
            return "HOUSE";
        case Currency.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.currencyToJSON = currencyToJSON;
