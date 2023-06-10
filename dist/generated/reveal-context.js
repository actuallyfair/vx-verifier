"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevealContext = exports.StandardDerivation = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseStandardDerivation() {
    return { commitmentPreimage: new Uint8Array(), playerSeed: "" };
}
exports.StandardDerivation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitmentPreimage.length !== 0) {
            writer.uint32(10).bytes(message.commitmentPreimage);
        }
        if (message.playerSeed !== "") {
            writer.uint32(18).string(message.playerSeed);
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
                    message.commitmentPreimage = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            commitmentPreimage: isSet(object.commitmentPreimage)
                ? bytesFromBase64(object.commitmentPreimage)
                : new Uint8Array(),
            playerSeed: isSet(object.playerSeed) ? String(object.playerSeed) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitmentPreimage !== undefined &&
            (obj.commitmentPreimage = base64FromBytes(message.commitmentPreimage !== undefined ? message.commitmentPreimage : new Uint8Array()));
        message.playerSeed !== undefined && (obj.playerSeed = message.playerSeed);
        return obj;
    },
    create(base) {
        return exports.StandardDerivation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStandardDerivation();
        message.commitmentPreimage = object.commitmentPreimage ?? new Uint8Array();
        message.playerSeed = object.playerSeed ?? "";
        return message;
    },
};
function createBaseRevealContext() {
    return { standardDerivation: undefined };
}
exports.RevealContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.standardDerivation !== undefined) {
            exports.StandardDerivation.encode(message.standardDerivation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevealContext();
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
        return exports.RevealContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRevealContext();
        message.standardDerivation = (object.standardDerivation !== undefined && object.standardDerivation !== null)
            ? exports.StandardDerivation.fromPartial(object.standardDerivation)
            : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
