"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoFairCoinToss = exports.demoFairCoinToss_ChoiceToJSON = exports.demoFairCoinToss_ChoiceFromJSON = exports.DemoFairCoinToss_Choice = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "";
var DemoFairCoinToss_Choice;
(function (DemoFairCoinToss_Choice) {
    DemoFairCoinToss_Choice[DemoFairCoinToss_Choice["HEADS"] = 0] = "HEADS";
    DemoFairCoinToss_Choice[DemoFairCoinToss_Choice["TAILS"] = 1] = "TAILS";
    DemoFairCoinToss_Choice[DemoFairCoinToss_Choice["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DemoFairCoinToss_Choice = exports.DemoFairCoinToss_Choice || (exports.DemoFairCoinToss_Choice = {}));
function demoFairCoinToss_ChoiceFromJSON(object) {
    switch (object) {
        case 0:
        case "HEADS":
            return DemoFairCoinToss_Choice.HEADS;
        case 1:
        case "TAILS":
            return DemoFairCoinToss_Choice.TAILS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DemoFairCoinToss_Choice.UNRECOGNIZED;
    }
}
exports.demoFairCoinToss_ChoiceFromJSON = demoFairCoinToss_ChoiceFromJSON;
function demoFairCoinToss_ChoiceToJSON(object) {
    switch (object) {
        case DemoFairCoinToss_Choice.HEADS:
            return "HEADS";
        case DemoFairCoinToss_Choice.TAILS:
            return "TAILS";
        case DemoFairCoinToss_Choice.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.demoFairCoinToss_ChoiceToJSON = demoFairCoinToss_ChoiceToJSON;
function createBaseDemoFairCoinToss() {
    return { playerChoice: 0 };
}
exports.DemoFairCoinToss = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playerChoice !== 0) {
            writer.uint32(8).int32(message.playerChoice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDemoFairCoinToss();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.playerChoice = reader.int32();
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
            playerChoice: isSet(object.playerChoice)
                ? demoFairCoinToss_ChoiceFromJSON(object.playerChoice)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playerChoice !== undefined &&
            (obj.playerChoice = demoFairCoinToss_ChoiceToJSON(message.playerChoice));
        return obj;
    },
    create(base) {
        return exports.DemoFairCoinToss.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDemoFairCoinToss();
        message.playerChoice = object.playerChoice ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
