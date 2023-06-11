"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amount = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const currency_1 = require("./currency");
function createBaseAmount() {
    return { currency: 0, value: BigInt("0") };
}
exports.Amount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.value !== BigInt("0")) {
            writer.uint32(16).int64(message.value.toString());
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAmount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.currency = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.value = longToBigint(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            currency: isSet(object.currency) ? (0, currency_1.currencyFromJSON)(object.currency) : 0,
            value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        message.currency !== undefined && (obj.currency = (0, currency_1.currencyToJSON)(message.currency));
        message.value !== undefined && (obj.value = message.value.toString());
        return obj;
    },
    create(base) {
        return exports.Amount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAmount();
        message.currency = object.currency ?? 0;
        message.value = object.value ?? BigInt("0");
        return message;
    },
};
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
