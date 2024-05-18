/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export interface MinesStart {
  amount: Amount | undefined;
  cells: number;
  mines: number;
  /** this is simply how to display the game in rows/comlumns, but has no effect on the game results */
  cellLineBreak: number;
  houseEdge: number;
}

export interface MinesMove {
  /** Note, this is 0 index'd */
  cell: number;
}

export interface Mines {
  start?: MinesStart | undefined;
  move?: MinesMove | undefined;
  cashout?: boolean | undefined;
}

function createBaseMinesStart(): MinesStart {
  return { amount: undefined, cells: 0, mines: 0, cellLineBreak: 0, houseEdge: 0 };
}

export const MinesStart = {
  encode(message: MinesStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
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
    if (message.houseEdge !== 0) {
      writer.uint32(41).double(message.houseEdge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinesStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinesStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
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

  fromJSON(object: any): MinesStart {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      cells: isSet(object.cells) ? globalThis.Number(object.cells) : 0,
      mines: isSet(object.mines) ? globalThis.Number(object.mines) : 0,
      cellLineBreak: isSet(object.cellLineBreak) ? globalThis.Number(object.cellLineBreak) : 0,
      houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0,
    };
  },

  toJSON(message: MinesStart): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
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
    if (message.houseEdge !== 0) {
      obj.houseEdge = message.houseEdge;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MinesStart>, I>>(base?: I): MinesStart {
    return MinesStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MinesStart>, I>>(object: I): MinesStart {
    const message = createBaseMinesStart();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.cells = object.cells ?? 0;
    message.mines = object.mines ?? 0;
    message.cellLineBreak = object.cellLineBreak ?? 0;
    message.houseEdge = object.houseEdge ?? 0;
    return message;
  },
};

function createBaseMinesMove(): MinesMove {
  return { cell: 0 };
}

export const MinesMove = {
  encode(message: MinesMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cell !== 0) {
      writer.uint32(8).int32(message.cell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinesMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): MinesMove {
    return { cell: isSet(object.cell) ? globalThis.Number(object.cell) : 0 };
  },

  toJSON(message: MinesMove): unknown {
    const obj: any = {};
    if (message.cell !== 0) {
      obj.cell = Math.round(message.cell);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MinesMove>, I>>(base?: I): MinesMove {
    return MinesMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MinesMove>, I>>(object: I): MinesMove {
    const message = createBaseMinesMove();
    message.cell = object.cell ?? 0;
    return message;
  },
};

function createBaseMines(): Mines {
  return { start: undefined, move: undefined, cashout: undefined };
}

export const Mines = {
  encode(message: Mines, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      MinesStart.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.move !== undefined) {
      MinesMove.encode(message.move, writer.uint32(18).fork()).ldelim();
    }
    if (message.cashout !== undefined) {
      writer.uint32(24).bool(message.cashout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mines {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMines();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = MinesStart.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.move = MinesMove.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mines {
    return {
      start: isSet(object.start) ? MinesStart.fromJSON(object.start) : undefined,
      move: isSet(object.move) ? MinesMove.fromJSON(object.move) : undefined,
      cashout: isSet(object.cashout) ? globalThis.Boolean(object.cashout) : undefined,
    };
  },

  toJSON(message: Mines): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = MinesStart.toJSON(message.start);
    }
    if (message.move !== undefined) {
      obj.move = MinesMove.toJSON(message.move);
    }
    if (message.cashout !== undefined) {
      obj.cashout = message.cashout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mines>, I>>(base?: I): Mines {
    return Mines.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mines>, I>>(object: I): Mines {
    const message = createBaseMines();
    message.start = (object.start !== undefined && object.start !== null)
      ? MinesStart.fromPartial(object.start)
      : undefined;
    message.move = (object.move !== undefined && object.move !== null) ? MinesMove.fromPartial(object.move) : undefined;
    message.cashout = object.cashout ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
