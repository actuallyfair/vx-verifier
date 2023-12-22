"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiLo = exports.HiLoMove = exports.HiLoStart = exports.hiLoMove_ChoiceToJSON = exports.hiLoMove_ChoiceFromJSON = exports.HiLoMove_Choice = exports.cardToJSON = exports.cardFromJSON = exports.Card = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
var Card;
(function (Card) {
    Card[Card["Unknown"] = 0] = "Unknown";
    Card[Card["Ace"] = 1] = "Ace";
    Card[Card["Two"] = 2] = "Two";
    Card[Card["Three"] = 3] = "Three";
    Card[Card["Four"] = 4] = "Four";
    Card[Card["Five"] = 5] = "Five";
    Card[Card["Six"] = 6] = "Six";
    Card[Card["Seven"] = 7] = "Seven";
    Card[Card["Eight"] = 8] = "Eight";
    Card[Card["Nine"] = 9] = "Nine";
    Card[Card["Ten"] = 10] = "Ten";
    Card[Card["Jack"] = 11] = "Jack";
    Card[Card["Queen"] = 12] = "Queen";
    Card[Card["King"] = 13] = "King";
    Card[Card["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Card || (exports.Card = Card = {}));
function cardFromJSON(object) {
    switch (object) {
        case 0:
        case "Unknown":
            return Card.Unknown;
        case 1:
        case "Ace":
            return Card.Ace;
        case 2:
        case "Two":
            return Card.Two;
        case 3:
        case "Three":
            return Card.Three;
        case 4:
        case "Four":
            return Card.Four;
        case 5:
        case "Five":
            return Card.Five;
        case 6:
        case "Six":
            return Card.Six;
        case 7:
        case "Seven":
            return Card.Seven;
        case 8:
        case "Eight":
            return Card.Eight;
        case 9:
        case "Nine":
            return Card.Nine;
        case 10:
        case "Ten":
            return Card.Ten;
        case 11:
        case "Jack":
            return Card.Jack;
        case 12:
        case "Queen":
            return Card.Queen;
        case 13:
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
        case Card.Unknown:
            return "Unknown";
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
function createBaseHiLoStart() {
    return { amount: undefined, startingCard: 0 };
}
exports.HiLoStart = {
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
        const message = createBaseHiLoStart();
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
        if (message.amount !== undefined) {
            obj.amount = amount_1.Amount.toJSON(message.amount);
        }
        if (message.startingCard !== 0) {
            obj.startingCard = cardToJSON(message.startingCard);
        }
        return obj;
    },
    create(base) {
        return exports.HiLoStart.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHiLoStart();
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
            moveIndex: isSet(object.moveIndex) ? globalThis.Number(object.moveIndex) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.playerChoice !== 0) {
            obj.playerChoice = hiLoMove_ChoiceToJSON(message.playerChoice);
        }
        if (message.moveIndex !== 0) {
            obj.moveIndex = Math.round(message.moveIndex);
        }
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
function createBaseHiLo() {
    return { start: undefined, move: undefined };
}
exports.HiLo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined) {
            exports.HiLoStart.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.move !== undefined) {
            exports.HiLoMove.encode(message.move, writer.uint32(18).fork()).ldelim();
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
                    message.start = exports.HiLoStart.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.move = exports.HiLoMove.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? exports.HiLoStart.fromJSON(object.start) : undefined,
            move: isSet(object.move) ? exports.HiLoMove.fromJSON(object.move) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined) {
            obj.start = exports.HiLoStart.toJSON(message.start);
        }
        if (message.move !== undefined) {
            obj.move = exports.HiLoMove.toJSON(message.move);
        }
        return obj;
    },
    create(base) {
        return exports.HiLo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHiLo();
        message.start = (object.start !== undefined && object.start !== null)
            ? exports.HiLoStart.fromPartial(object.start)
            : undefined;
        message.move = (object.move !== undefined && object.move !== null) ? exports.HiLoMove.fromPartial(object.move) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
