"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairCoinToss = exports.fairCoinToss_ChoiceToJSON = exports.fairCoinToss_ChoiceFromJSON = exports.FairCoinToss_Choice = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
var FairCoinToss_Choice;
(function (FairCoinToss_Choice) {
    FairCoinToss_Choice[FairCoinToss_Choice["HEADS"] = 0] = "HEADS";
    FairCoinToss_Choice[FairCoinToss_Choice["TAILS"] = 1] = "TAILS";
    FairCoinToss_Choice[FairCoinToss_Choice["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FairCoinToss_Choice || (exports.FairCoinToss_Choice = FairCoinToss_Choice = {}));
function fairCoinToss_ChoiceFromJSON(object) {
    switch (object) {
        case 0:
        case "HEADS":
            return FairCoinToss_Choice.HEADS;
        case 1:
        case "TAILS":
            return FairCoinToss_Choice.TAILS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FairCoinToss_Choice.UNRECOGNIZED;
    }
}
exports.fairCoinToss_ChoiceFromJSON = fairCoinToss_ChoiceFromJSON;
function fairCoinToss_ChoiceToJSON(object) {
    switch (object) {
        case FairCoinToss_Choice.HEADS:
            return "HEADS";
        case FairCoinToss_Choice.TAILS:
            return "TAILS";
        case FairCoinToss_Choice.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fairCoinToss_ChoiceToJSON = fairCoinToss_ChoiceToJSON;
function createBaseFairCoinToss() {
    return { playerChoice: 0, nonce: 0 };
}
exports.FairCoinToss = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playerChoice !== 0) {
            writer.uint32(8).int32(message.playerChoice);
        }
        if (message.nonce !== 0) {
            writer.uint32(16).int32(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFairCoinToss();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.playerChoice = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.nonce = reader.int32();
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
            playerChoice: isSet(object.playerChoice) ? fairCoinToss_ChoiceFromJSON(object.playerChoice) : 0,
            nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playerChoice !== undefined && (obj.playerChoice = fairCoinToss_ChoiceToJSON(message.playerChoice));
        message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
        return obj;
    },
    create(base) {
        return exports.FairCoinToss.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFairCoinToss();
        message.playerChoice = object.playerChoice ?? 0;
        message.nonce = object.nonce ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
