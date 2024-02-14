"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tower = exports.TowerMove = exports.TowerStart = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
function createBaseTowerStart() {
    return { amount: undefined, levels: 0, choicesPerLevel: 0, minesPerLevel: 0, houseEdge: 0 };
}
exports.TowerStart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            amount_1.Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.levels !== 0) {
            writer.uint32(16).int32(message.levels);
        }
        if (message.choicesPerLevel !== 0) {
            writer.uint32(24).int32(message.choicesPerLevel);
        }
        if (message.minesPerLevel !== 0) {
            writer.uint32(32).int32(message.minesPerLevel);
        }
        if (message.houseEdge !== 0) {
            writer.uint32(41).double(message.houseEdge);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTowerStart();
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
                    message.levels = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.choicesPerLevel = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.minesPerLevel = reader.int32();
                    continue;
                case 5:
                    if (tag !== 41) {
                        break;
                    }
                    message.houseEdge = reader.double();
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
            levels: isSet(object.levels) ? globalThis.Number(object.levels) : 0,
            choicesPerLevel: isSet(object.choicesPerLevel) ? globalThis.Number(object.choicesPerLevel) : 0,
            minesPerLevel: isSet(object.minesPerLevel) ? globalThis.Number(object.minesPerLevel) : 0,
            houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount !== undefined) {
            obj.amount = amount_1.Amount.toJSON(message.amount);
        }
        if (message.levels !== 0) {
            obj.levels = Math.round(message.levels);
        }
        if (message.choicesPerLevel !== 0) {
            obj.choicesPerLevel = Math.round(message.choicesPerLevel);
        }
        if (message.minesPerLevel !== 0) {
            obj.minesPerLevel = Math.round(message.minesPerLevel);
        }
        if (message.houseEdge !== 0) {
            obj.houseEdge = message.houseEdge;
        }
        return obj;
    },
    create(base) {
        return exports.TowerStart.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTowerStart();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        message.levels = object.levels ?? 0;
        message.choicesPerLevel = object.choicesPerLevel ?? 0;
        message.minesPerLevel = object.minesPerLevel ?? 0;
        message.houseEdge = object.houseEdge ?? 0;
        return message;
    },
};
function createBaseTowerMove() {
    return { choice: 0 };
}
exports.TowerMove = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.choice !== 0) {
            writer.uint32(8).int32(message.choice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTowerMove();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.choice = reader.int32();
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
        return { choice: isSet(object.choice) ? globalThis.Number(object.choice) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.choice !== 0) {
            obj.choice = Math.round(message.choice);
        }
        return obj;
    },
    create(base) {
        return exports.TowerMove.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTowerMove();
        message.choice = object.choice ?? 0;
        return message;
    },
};
function createBaseTower() {
    return { start: undefined, move: undefined, cashout: undefined };
}
exports.Tower = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined) {
            exports.TowerStart.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.move !== undefined) {
            exports.TowerMove.encode(message.move, writer.uint32(18).fork()).ldelim();
        }
        if (message.cashout !== undefined) {
            writer.uint32(24).bool(message.cashout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTower();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.start = exports.TowerStart.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.move = exports.TowerMove.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.cashout = reader.bool();
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
            start: isSet(object.start) ? exports.TowerStart.fromJSON(object.start) : undefined,
            move: isSet(object.move) ? exports.TowerMove.fromJSON(object.move) : undefined,
            cashout: isSet(object.cashout) ? globalThis.Boolean(object.cashout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined) {
            obj.start = exports.TowerStart.toJSON(message.start);
        }
        if (message.move !== undefined) {
            obj.move = exports.TowerMove.toJSON(message.move);
        }
        if (message.cashout !== undefined) {
            obj.cashout = message.cashout;
        }
        return obj;
    },
    create(base) {
        return exports.Tower.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTower();
        message.start = (object.start !== undefined && object.start !== null)
            ? exports.TowerStart.fromPartial(object.start)
            : undefined;
        message.move = (object.move !== undefined && object.move !== null) ? exports.TowerMove.fromPartial(object.move) : undefined;
        message.cashout = object.cashout ?? undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
