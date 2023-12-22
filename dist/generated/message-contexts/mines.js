"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mines = exports.MinesMove = exports.MinesStart = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const amount_1 = require("../amount");
function createBaseMinesStart() {
    return { amount: undefined, cells: 0, mines: 0, cellLineBreak: 0 };
}
exports.MinesStart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            amount_1.Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.cells !== 0) {
            writer.uint32(16).int32(message.cells);
        }
        if (message.mines !== 0) {
            writer.uint32(24).int32(message.mines);
        }
        if (message.cellLineBreak !== 0) {
            writer.uint32(32).int32(message.cellLineBreak);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinesStart();
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
                    message.cells = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.mines = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.cellLineBreak = reader.int32();
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
            cells: isSet(object.cells) ? globalThis.Number(object.cells) : 0,
            mines: isSet(object.mines) ? globalThis.Number(object.mines) : 0,
            cellLineBreak: isSet(object.cellLineBreak) ? globalThis.Number(object.cellLineBreak) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount !== undefined) {
            obj.amount = amount_1.Amount.toJSON(message.amount);
        }
        if (message.cells !== 0) {
            obj.cells = Math.round(message.cells);
        }
        if (message.mines !== 0) {
            obj.mines = Math.round(message.mines);
        }
        if (message.cellLineBreak !== 0) {
            obj.cellLineBreak = Math.round(message.cellLineBreak);
        }
        return obj;
    },
    create(base) {
        return exports.MinesStart.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMinesStart();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? amount_1.Amount.fromPartial(object.amount)
            : undefined;
        message.cells = object.cells ?? 0;
        message.mines = object.mines ?? 0;
        message.cellLineBreak = object.cellLineBreak ?? 0;
        return message;
    },
};
function createBaseMinesMove() {
    return { cell: 0 };
}
exports.MinesMove = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cell !== 0) {
            writer.uint32(8).int32(message.cell);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinesMove();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.cell = reader.int32();
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
        return { cell: isSet(object.cell) ? globalThis.Number(object.cell) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.cell !== 0) {
            obj.cell = Math.round(message.cell);
        }
        return obj;
    },
    create(base) {
        return exports.MinesMove.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMinesMove();
        message.cell = object.cell ?? 0;
        return message;
    },
};
function createBaseMines() {
    return { start: undefined, move: undefined, cashout: undefined };
}
exports.Mines = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined) {
            exports.MinesStart.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.move !== undefined) {
            exports.MinesMove.encode(message.move, writer.uint32(18).fork()).ldelim();
        }
        if (message.cashout !== undefined) {
            writer.uint32(24).bool(message.cashout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMines();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.start = exports.MinesStart.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.move = exports.MinesMove.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? exports.MinesStart.fromJSON(object.start) : undefined,
            move: isSet(object.move) ? exports.MinesMove.fromJSON(object.move) : undefined,
            cashout: isSet(object.cashout) ? globalThis.Boolean(object.cashout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined) {
            obj.start = exports.MinesStart.toJSON(message.start);
        }
        if (message.move !== undefined) {
            obj.move = exports.MinesMove.toJSON(message.move);
        }
        if (message.cashout !== undefined) {
            obj.cashout = message.cashout;
        }
        return obj;
    },
    create(base) {
        return exports.Mines.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMines();
        message.start = (object.start !== undefined && object.start !== null)
            ? exports.MinesStart.fromPartial(object.start)
            : undefined;
        message.move = (object.move !== undefined && object.move !== null) ? exports.MinesMove.fromPartial(object.move) : undefined;
        message.cashout = object.cashout ?? undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
