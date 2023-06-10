"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VHEMPCrash = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseVHEMPCrash() {
    return { gameId: 0 };
}
exports.VHEMPCrash = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gameId !== 0) {
            writer.uint32(8).uint32(message.gameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVHEMPCrash();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.gameId = reader.uint32();
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
        return { gameId: isSet(object.gameId) ? Number(object.gameId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
        return obj;
    },
    create(base) {
        return exports.VHEMPCrash.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVHEMPCrash();
        message.gameId = object.gameId ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
