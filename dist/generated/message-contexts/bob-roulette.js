"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOBRoulette_Bet = exports.BOBRoulette = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
function createBaseBOBRoulette() {
    return { blackBets: [], orangeBets: [], bonusBets: [] };
}
exports.BOBRoulette = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.blackBets) {
            exports.BOBRoulette_Bet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.orangeBets) {
            exports.BOBRoulette_Bet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.bonusBets) {
            exports.BOBRoulette_Bet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBOBRoulette();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blackBets.push(exports.BOBRoulette_Bet.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orangeBets.push(exports.BOBRoulette_Bet.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bonusBets.push(exports.BOBRoulette_Bet.decode(reader, reader.uint32()));
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
            blackBets: globalThis.Array.isArray(object?.blackBets)
                ? object.blackBets.map((e) => exports.BOBRoulette_Bet.fromJSON(e))
                : [],
            orangeBets: globalThis.Array.isArray(object?.orangeBets)
                ? object.orangeBets.map((e) => exports.BOBRoulette_Bet.fromJSON(e))
                : [],
            bonusBets: globalThis.Array.isArray(object?.bonusBets)
                ? object.bonusBets.map((e) => exports.BOBRoulette_Bet.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blackBets?.length) {
            obj.blackBets = message.blackBets.map((e) => exports.BOBRoulette_Bet.toJSON(e));
        }
        if (message.orangeBets?.length) {
            obj.orangeBets = message.orangeBets.map((e) => exports.BOBRoulette_Bet.toJSON(e));
        }
        if (message.bonusBets?.length) {
            obj.bonusBets = message.bonusBets.map((e) => exports.BOBRoulette_Bet.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.BOBRoulette.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBOBRoulette();
        message.blackBets = object.blackBets?.map((e) => exports.BOBRoulette_Bet.fromPartial(e)) || [];
        message.orangeBets = object.orangeBets?.map((e) => exports.BOBRoulette_Bet.fromPartial(e)) || [];
        message.bonusBets = object.bonusBets?.map((e) => exports.BOBRoulette_Bet.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBOBRoulette_Bet() {
    return { uname: "", amount: undefined };
}
exports.BOBRoulette_Bet = {
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
        const message = createBaseBOBRoulette_Bet();
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
        return exports.BOBRoulette_Bet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBOBRoulette_Bet();
        message.uname = object.uname ?? "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
