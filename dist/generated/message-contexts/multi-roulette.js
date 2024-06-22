"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiRoulette_Outcome = exports.MultiRoulette_Bet = exports.MultiRoulette = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
function createBaseMultiRoulette() {
    return { outcomes: [] };
}
exports.MultiRoulette = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.outcomes) {
            exports.MultiRoulette_Outcome.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiRoulette();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.outcomes.push(exports.MultiRoulette_Outcome.decode(reader, reader.uint32()));
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
            outcomes: globalThis.Array.isArray(object?.outcomes)
                ? object.outcomes.map((e) => exports.MultiRoulette_Outcome.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.outcomes?.length) {
            obj.outcomes = message.outcomes.map((e) => exports.MultiRoulette_Outcome.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MultiRoulette.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMultiRoulette();
        message.outcomes = object.outcomes?.map((e) => exports.MultiRoulette_Outcome.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMultiRoulette_Bet() {
    return { uname: "", amount: undefined };
}
exports.MultiRoulette_Bet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uname !== "") {
            writer.uint32(10).string(message.uname);
        }
        if (message.amount !== undefined) {
            amount_1.Amount.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiRoulette_Bet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uname = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount = amount_1.Amount.decode(reader, reader.uint32());
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
            uname: isSet(object.uname) ? globalThis.String(object.uname) : "",
            amount: isSet(object.amount) ? amount_1.Amount.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uname !== "") {
            obj.uname = message.uname;
        }
        if (message.amount !== undefined) {
            obj.amount = amount_1.Amount.toJSON(message.amount);
        }
        return obj;
    },
    create(base) {
        return exports.MultiRoulette_Bet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMultiRoulette_Bet();
        message.uname = object.uname ?? "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMultiRoulette_Outcome() {
    return { multiplier: 0, probability: 0, bets: [], name: undefined };
}
exports.MultiRoulette_Outcome = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.multiplier !== 0) {
            writer.uint32(9).double(message.multiplier);
        }
        if (message.probability !== 0) {
            writer.uint32(17).double(message.probability);
        }
        for (const v of message.bets) {
            exports.MultiRoulette_Bet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.name !== undefined) {
            writer.uint32(34).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiRoulette_Outcome();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.multiplier = reader.double();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.probability = reader.double();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bets.push(exports.MultiRoulette_Bet.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
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
            multiplier: isSet(object.multiplier) ? globalThis.Number(object.multiplier) : 0,
            probability: isSet(object.probability) ? globalThis.Number(object.probability) : 0,
            bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e) => exports.MultiRoulette_Bet.fromJSON(e)) : [],
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.multiplier !== 0) {
            obj.multiplier = message.multiplier;
        }
        if (message.probability !== 0) {
            obj.probability = message.probability;
        }
        if (message.bets?.length) {
            obj.bets = message.bets.map((e) => exports.MultiRoulette_Bet.toJSON(e));
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.MultiRoulette_Outcome.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMultiRoulette_Outcome();
        message.multiplier = object.multiplier ?? 0;
        message.probability = object.probability ?? 0;
        message.bets = object.bets?.map((e) => exports.MultiRoulette_Bet.fromPartial(e)) || [];
        message.name = object.name ?? undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
