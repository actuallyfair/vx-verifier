"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitmentContext = exports.Sha256Chain = exports.Sha256Commitment = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseSha256Commitment() {
    return {};
}
exports.Sha256Commitment = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSha256Commitment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Sha256Commitment.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseSha256Commitment();
        return message;
    },
};
function createBaseSha256Chain() {
    return {};
}
exports.Sha256Chain = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSha256Chain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Sha256Chain.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseSha256Chain();
        return message;
    },
};
function createBaseCommitmentContext() {
    return { sha256Commitment: undefined, sha256Chain: undefined };
}
exports.CommitmentContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sha256Commitment !== undefined) {
            exports.Sha256Commitment.encode(message.sha256Commitment, writer.uint32(10).fork()).ldelim();
        }
        if (message.sha256Chain !== undefined) {
            exports.Sha256Chain.encode(message.sha256Chain, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sha256Commitment = exports.Sha256Commitment.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sha256Chain = exports.Sha256Chain.decode(reader, reader.uint32());
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
            sha256Commitment: isSet(object.sha256Commitment) ? exports.Sha256Commitment.fromJSON(object.sha256Commitment) : undefined,
            sha256Chain: isSet(object.sha256Chain) ? exports.Sha256Chain.fromJSON(object.sha256Chain) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sha256Commitment !== undefined &&
            (obj.sha256Commitment = message.sha256Commitment ? exports.Sha256Commitment.toJSON(message.sha256Commitment) : undefined);
        message.sha256Chain !== undefined &&
            (obj.sha256Chain = message.sha256Chain ? exports.Sha256Chain.toJSON(message.sha256Chain) : undefined);
        return obj;
    },
    create(base) {
        return exports.CommitmentContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommitmentContext();
        message.sha256Commitment = (object.sha256Commitment !== undefined && object.sha256Commitment !== null)
            ? exports.Sha256Commitment.fromPartial(object.sha256Commitment)
            : undefined;
        message.sha256Chain = (object.sha256Chain !== undefined && object.sha256Chain !== null)
            ? exports.Sha256Chain.fromPartial(object.sha256Chain)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
