"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reveal = exports.StandardDerivation = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "reveals";
function createBaseStandardDerivation() {
    return { playerSeed: "" };
}
exports.StandardDerivation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playerSeed !== "") {
            writer.uint32(10).string(message.playerSeed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStandardDerivation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.playerSeed = reader.string();
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
        return { playerSeed: isSet(object.playerSeed) ? String(object.playerSeed) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.playerSeed !== undefined && (obj.playerSeed = message.playerSeed);
        return obj;
    },
    create(base) {
        return exports.StandardDerivation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStandardDerivation();
        message.playerSeed = object.playerSeed ?? "";
        return message;
    },
};
function createBaseReveal() {
    return { standardDerivation: undefined };
}
exports.Reveal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.standardDerivation !== undefined) {
            exports.StandardDerivation.encode(message.standardDerivation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReveal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.standardDerivation = exports.StandardDerivation.decode(reader, reader.uint32());
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
            standardDerivation: isSet(object.standardDerivation)
                ? exports.StandardDerivation.fromJSON(object.standardDerivation)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.standardDerivation !== undefined && (obj.standardDerivation = message.standardDerivation
            ? exports.StandardDerivation.toJSON(message.standardDerivation)
            : undefined);
        return obj;
    },
    create(base) {
        return exports.Reveal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReveal();
        message.standardDerivation = (object.standardDerivation !== undefined && object.standardDerivation !== null)
            ? exports.StandardDerivation.fromPartial(object.standardDerivation)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
