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
    return { currency: 0, oldValue: 0, value: 0 };
}
exports.Amount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currency !== 0) {
            writer.uint32(8).int32(message.currency);
        }
        if (message.oldValue !== 0) {
            writer.uint32(16).int64(message.oldValue);
        }
        if (message.value !== 0) {
            writer.uint32(25).double(message.value);
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
                    message.oldValue = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.value = reader.double();
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
            oldValue: isSet(object.oldValue) ? globalThis.Number(object.oldValue) : 0,
            value: isSet(object.value) ? globalThis.Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.currency !== 0) {
            obj.currency = (0, currency_1.currencyToJSON)(message.currency);
        }
        if (message.oldValue !== 0) {
            obj.oldValue = Math.round(message.oldValue);
        }
        if (message.value !== 0) {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Amount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAmount();
        message.currency = object.currency ?? 0;
        message.oldValue = object.oldValue ?? 0;
        message.value = object.value ?? 0;
        return message;
    },
};
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
