"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wager = exports.RouletteWager = exports.DiceWager = exports.RockPaperScissorsWager = exports.rockPaperScissorsWager_ChoiceToJSON = exports.rockPaperScissorsWager_ChoiceFromJSON = exports.RockPaperScissorsWager_Choice = exports.currencyToJSON = exports.currencyFromJSON = exports.Currency = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const demo_fair_coin_toss_1 = require("./wagers/demo_fair_coin_toss");
exports.protobufPackage = "wagers";
/** Define an enumeration for types of currencies. */
var Currency;
(function (Currency) {
    Currency[Currency["CURRENCY_UNSPECIFIED"] = 0] = "CURRENCY_UNSPECIFIED";
    /** BTC - Bitcoin */
    Currency[Currency["BTC"] = 1] = "BTC";
    Currency[Currency["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Currency = exports.Currency || (exports.Currency = {}));
function currencyFromJSON(object) {
    switch (object) {
        case 0:
        case "CURRENCY_UNSPECIFIED":
            return Currency.CURRENCY_UNSPECIFIED;
        case 1:
        case "BTC":
            return Currency.BTC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Currency.UNRECOGNIZED;
    }
}
exports.currencyFromJSON = currencyFromJSON;
function currencyToJSON(object) {
    switch (object) {
        case Currency.CURRENCY_UNSPECIFIED:
            return "CURRENCY_UNSPECIFIED";
        case Currency.BTC:
            return "BTC";
        case Currency.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.currencyToJSON = currencyToJSON;
var RockPaperScissorsWager_Choice;
(function (RockPaperScissorsWager_Choice) {
    RockPaperScissorsWager_Choice[RockPaperScissorsWager_Choice["ROCK"] = 0] = "ROCK";
    RockPaperScissorsWager_Choice[RockPaperScissorsWager_Choice["PAPER"] = 1] = "PAPER";
    RockPaperScissorsWager_Choice[RockPaperScissorsWager_Choice["SCISSORS"] = 2] = "SCISSORS";
    RockPaperScissorsWager_Choice[RockPaperScissorsWager_Choice["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RockPaperScissorsWager_Choice = exports.RockPaperScissorsWager_Choice || (exports.RockPaperScissorsWager_Choice = {}));
function rockPaperScissorsWager_ChoiceFromJSON(object) {
    switch (object) {
        case 0:
        case "ROCK":
            return RockPaperScissorsWager_Choice.ROCK;
        case 1:
        case "PAPER":
            return RockPaperScissorsWager_Choice.PAPER;
        case 2:
        case "SCISSORS":
            return RockPaperScissorsWager_Choice.SCISSORS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RockPaperScissorsWager_Choice.UNRECOGNIZED;
    }
}
exports.rockPaperScissorsWager_ChoiceFromJSON = rockPaperScissorsWager_ChoiceFromJSON;
function rockPaperScissorsWager_ChoiceToJSON(object) {
    switch (object) {
        case RockPaperScissorsWager_Choice.ROCK:
            return "ROCK";
        case RockPaperScissorsWager_Choice.PAPER:
            return "PAPER";
        case RockPaperScissorsWager_Choice.SCISSORS:
            return "SCISSORS";
        case RockPaperScissorsWager_Choice.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.rockPaperScissorsWager_ChoiceToJSON = rockPaperScissorsWager_ChoiceToJSON;
function createBaseRockPaperScissorsWager() {
    return { playerChoice: 0 };
}
exports.RockPaperScissorsWager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playerChoice !== 0) {
            writer.uint32(8).int32(message.playerChoice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRockPaperScissorsWager();
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
            playerChoice: isSet(object.playerChoice) ? rockPaperScissorsWager_ChoiceFromJSON(object.playerChoice) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playerChoice !== undefined &&
            (obj.playerChoice = rockPaperScissorsWager_ChoiceToJSON(message.playerChoice));
        return obj;
    },
    create(base) {
        return exports.RockPaperScissorsWager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRockPaperScissorsWager();
        message.playerChoice = object.playerChoice ?? 0;
        return message;
    },
};
function createBaseDiceWager() {
    return { numberToBeat: 0 };
}
exports.DiceWager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.numberToBeat !== 0) {
            writer.uint32(8).int32(message.numberToBeat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDiceWager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.numberToBeat = reader.int32();
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
        return { numberToBeat: isSet(object.numberToBeat) ? Number(object.numberToBeat) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.numberToBeat !== undefined && (obj.numberToBeat = Math.round(message.numberToBeat));
        return obj;
    },
    create(base) {
        return exports.DiceWager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDiceWager();
        message.numberToBeat = object.numberToBeat ?? 0;
        return message;
    },
};
function createBaseRouletteWager() {
    return { numberGuessed: 0, amount: 0, currency: 0 };
}
exports.RouletteWager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.numberGuessed !== 0) {
            writer.uint32(8).int32(message.numberGuessed);
        }
        if (message.amount !== 0) {
            writer.uint32(21).float(message.amount);
        }
        if (message.currency !== 0) {
            writer.uint32(24).int32(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouletteWager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.numberGuessed = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.amount = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.currency = reader.int32();
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
            numberGuessed: isSet(object.numberGuessed) ? Number(object.numberGuessed) : 0,
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.numberGuessed !== undefined && (obj.numberGuessed = Math.round(message.numberGuessed));
        message.amount !== undefined && (obj.amount = message.amount);
        message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
        return obj;
    },
    create(base) {
        return exports.RouletteWager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRouletteWager();
        message.numberGuessed = object.numberGuessed ?? 0;
        message.amount = object.amount ?? 0;
        message.currency = object.currency ?? 0;
        return message;
    },
};
function createBaseWager() {
    return { rockPaperScissors: undefined, diceWager: undefined, rouletteWager: undefined, demoFairCoinToss: undefined };
}
exports.Wager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rockPaperScissors !== undefined) {
            exports.RockPaperScissorsWager.encode(message.rockPaperScissors, writer.uint32(10).fork()).ldelim();
        }
        if (message.diceWager !== undefined) {
            exports.DiceWager.encode(message.diceWager, writer.uint32(18).fork()).ldelim();
        }
        if (message.rouletteWager !== undefined) {
            exports.RouletteWager.encode(message.rouletteWager, writer.uint32(26).fork()).ldelim();
        }
        if (message.demoFairCoinToss !== undefined) {
            demo_fair_coin_toss_1.DemoFairCoinToss.encode(message.demoFairCoinToss, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rockPaperScissors = exports.RockPaperScissorsWager.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.diceWager = exports.DiceWager.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rouletteWager = exports.RouletteWager.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.demoFairCoinToss = demo_fair_coin_toss_1.DemoFairCoinToss.decode(reader, reader.uint32());
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
            rockPaperScissors: isSet(object.rockPaperScissors)
                ? exports.RockPaperScissorsWager.fromJSON(object.rockPaperScissors)
                : undefined,
            diceWager: isSet(object.diceWager) ? exports.DiceWager.fromJSON(object.diceWager) : undefined,
            rouletteWager: isSet(object.rouletteWager) ? exports.RouletteWager.fromJSON(object.rouletteWager) : undefined,
            demoFairCoinToss: isSet(object.demoFairCoinToss) ? demo_fair_coin_toss_1.DemoFairCoinToss.fromJSON(object.demoFairCoinToss) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.rockPaperScissors !== undefined && (obj.rockPaperScissors = message.rockPaperScissors
            ? exports.RockPaperScissorsWager.toJSON(message.rockPaperScissors)
            : undefined);
        message.diceWager !== undefined &&
            (obj.diceWager = message.diceWager ? exports.DiceWager.toJSON(message.diceWager) : undefined);
        message.rouletteWager !== undefined &&
            (obj.rouletteWager = message.rouletteWager ? exports.RouletteWager.toJSON(message.rouletteWager) : undefined);
        message.demoFairCoinToss !== undefined &&
            (obj.demoFairCoinToss = message.demoFairCoinToss ? demo_fair_coin_toss_1.DemoFairCoinToss.toJSON(message.demoFairCoinToss) : undefined);
        return obj;
    },
    create(base) {
        return exports.Wager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWager();
        message.rockPaperScissors = (object.rockPaperScissors !== undefined && object.rockPaperScissors !== null)
            ? exports.RockPaperScissorsWager.fromPartial(object.rockPaperScissors)
            : undefined;
        message.diceWager = (object.diceWager !== undefined && object.diceWager !== null)
            ? exports.DiceWager.fromPartial(object.diceWager)
            : undefined;
        message.rouletteWager = (object.rouletteWager !== undefined && object.rouletteWager !== null)
            ? exports.RouletteWager.fromPartial(object.rouletteWager)
            : undefined;
        message.demoFairCoinToss = (object.demoFairCoinToss !== undefined && object.demoFairCoinToss !== null)
            ? demo_fair_coin_toss_1.DemoFairCoinToss.fromPartial(object.demoFairCoinToss)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
