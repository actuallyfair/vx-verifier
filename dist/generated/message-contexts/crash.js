"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crash = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseCrash() {
    return { houseEdge: 0 };
}
exports.Crash = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.houseEdge !== 0) {
            writer.uint32(9).double(message.houseEdge);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCrash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
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
        return { houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.houseEdge !== 0) {
            obj.houseEdge = message.houseEdge;
        }
        return obj;
    },
    create(base) {
        return exports.Crash.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCrash();
        message.houseEdge = object.houseEdge ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
