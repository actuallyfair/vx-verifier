"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256hmac = exports.sha256 = void 0;
const sha256_1 = __importDefault(require("./bcrypto/sha256"));
function sha256(data) {
    return new sha256_1.default().init().update(data).final();
}
exports.sha256 = sha256;
function sha256hmac(key, message) {
    return sha256_1.default.hmac().init(key).update(message).final();
}
exports.sha256hmac = sha256hmac;
