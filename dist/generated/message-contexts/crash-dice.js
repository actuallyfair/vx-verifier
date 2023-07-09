"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrashDice = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
function createBaseCrashDice() {
    return { amount: undefined, target: 0, houseEdge: 0 };
}
exports.CrashDice = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            amount_1.Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.target !== 0) {
            writer.uint32(17).double(message.target);
        }
        if (message.houseEdge !== 0) {
            writer.uint32(25).double(message.houseEdge);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCrashDice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount = amount_1.Amount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.target = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.houseEdge = reader.double();
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
            amount: isSet(object.amount) ? amount_1.Amount.fromJSON(object.amount) : undefined,
            target: isSet(object.target) ? Number(object.target) : 0,
            houseEdge: isSet(object.houseEdge) ? Number(object.houseEdge) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? amount_1.Amount.toJSON(message.amount) : undefined);
        message.target !== undefined && (obj.target = message.target);
        message.houseEdge !== undefined && (obj.houseEdge = message.houseEdge);
        return obj;
    },
    create(base) {
        return exports.CrashDice.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCrashDice();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        message.target = object.target ?? 0;
        message.houseEdge = object.houseEdge ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
