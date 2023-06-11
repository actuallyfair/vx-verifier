"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiLoMove = exports.HiLo = exports.hiLoMove_ChoiceToJSON = exports.hiLoMove_ChoiceFromJSON = exports.HiLoMove_Choice = exports.cardToJSON = exports.cardFromJSON = exports.Card = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
var Card;
(function (Card) {
    Card[Card["Ace"] = 0] = "Ace";
    Card[Card["Two"] = 1] = "Two";
    Card[Card["Three"] = 2] = "Three";
    Card[Card["Four"] = 3] = "Four";
    Card[Card["Five"] = 4] = "Five";
    Card[Card["Six"] = 5] = "Six";
    Card[Card["Seven"] = 6] = "Seven";
    Card[Card["Eight"] = 7] = "Eight";
    Card[Card["Nine"] = 8] = "Nine";
    Card[Card["Ten"] = 9] = "Ten";
    Card[Card["Jack"] = 10] = "Jack";
    Card[Card["Queen"] = 11] = "Queen";
    Card[Card["King"] = 12] = "King";
    Card[Card["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Card || (exports.Card = Card = {}));
function cardFromJSON(object) {
    switch (object) {
        case 0:
        case "Ace":
            return Card.Ace;
        case 1:
        case "Two":
            return Card.Two;
        case 2:
        case "Three":
            return Card.Three;
        case 3:
        case "Four":
            return Card.Four;
        case 4:
        case "Five":
            return Card.Five;
        case 5:
        case "Six":
            return Card.Six;
        case 6:
        case "Seven":
            return Card.Seven;
        case 7:
        case "Eight":
            return Card.Eight;
        case 8:
        case "Nine":
            return Card.Nine;
        case 9:
        case "Ten":
            return Card.Ten;
        case 10:
        case "Jack":
            return Card.Jack;
        case 11:
        case "Queen":
            return Card.Queen;
        case 12:
        case "King":
            return Card.King;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Card.UNRECOGNIZED;
    }
}
exports.cardFromJSON = cardFromJSON;
function cardToJSON(object) {
    switch (object) {
        case Card.Ace:
            return "Ace";
        case Card.Two:
            return "Two";
        case Card.Three:
            return "Three";
        case Card.Four:
            return "Four";
        case Card.Five:
            return "Five";
        case Card.Six:
            return "Six";
        case Card.Seven:
            return "Seven";
        case Card.Eight:
            return "Eight";
        case Card.Nine:
            return "Nine";
        case Card.Ten:
            return "Ten";
        case Card.Jack:
            return "Jack";
        case Card.Queen:
            return "Queen";
        case Card.King:
            return "King";
        case Card.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.cardToJSON = cardToJSON;
var HiLoMove_Choice;
(function (HiLoMove_Choice) {
    HiLoMove_Choice[HiLoMove_Choice["Hi"] = 0] = "Hi";
    HiLoMove_Choice[HiLoMove_Choice["Lo"] = 1] = "Lo";
    HiLoMove_Choice[HiLoMove_Choice["Skip"] = 2] = "Skip";
    HiLoMove_Choice[HiLoMove_Choice["Cashout"] = 3] = "Cashout";
    HiLoMove_Choice[HiLoMove_Choice["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HiLoMove_Choice || (exports.HiLoMove_Choice = HiLoMove_Choice = {}));
function hiLoMove_ChoiceFromJSON(object) {
    switch (object) {
        case 0:
        case "Hi":
            return HiLoMove_Choice.Hi;
        case 1:
        case "Lo":
            return HiLoMove_Choice.Lo;
        case 2:
        case "Skip":
            return HiLoMove_Choice.Skip;
        case 3:
        case "Cashout":
            return HiLoMove_Choice.Cashout;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HiLoMove_Choice.UNRECOGNIZED;
    }
}
exports.hiLoMove_ChoiceFromJSON = hiLoMove_ChoiceFromJSON;
function hiLoMove_ChoiceToJSON(object) {
    switch (object) {
        case HiLoMove_Choice.Hi:
            return "Hi";
        case HiLoMove_Choice.Lo:
            return "Lo";
        case HiLoMove_Choice.Skip:
            return "Skip";
        case HiLoMove_Choice.Cashout:
            return "Cashout";
        case HiLoMove_Choice.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.hiLoMove_ChoiceToJSON = hiLoMove_ChoiceToJSON;
function createBaseHiLo() {
    return { amount: undefined, startingCard: 0 };
}
exports.HiLo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            amount_1.Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingCard !== 0) {
            writer.uint32(16).int32(message.startingCard);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHiLo();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.startingCard = reader.int32();
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
            startingCard: isSet(object.startingCard) ? cardFromJSON(object.startingCard) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? amount_1.Amount.toJSON(message.amount) : undefined);
        message.startingCard !== undefined && (obj.startingCard = cardToJSON(message.startingCard));
        return obj;
    },
    create(base) {
        return exports.HiLo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHiLo();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        message.startingCard = object.startingCard ?? 0;
        return message;
    },
};
function createBaseHiLoMove() {
    return { playerChoice: 0, moveIndex: 0 };
}
exports.HiLoMove = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playerChoice !== 0) {
            writer.uint32(8).int32(message.playerChoice);
        }
        if (message.moveIndex !== 0) {
            writer.uint32(16).int32(message.moveIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHiLoMove();
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
                    message.moveIndex = reader.int32();
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
            playerChoice: isSet(object.playerChoice) ? hiLoMove_ChoiceFromJSON(object.playerChoice) : 0,
            moveIndex: isSet(object.moveIndex) ? Number(object.moveIndex) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playerChoice !== undefined && (obj.playerChoice = hiLoMove_ChoiceToJSON(message.playerChoice));
        message.moveIndex !== undefined && (obj.moveIndex = Math.round(message.moveIndex));
        return obj;
    },
    create(base) {
        return exports.HiLoMove.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHiLoMove();
        message.playerChoice = object.playerChoice ?? 0;
        message.moveIndex = object.moveIndex ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}