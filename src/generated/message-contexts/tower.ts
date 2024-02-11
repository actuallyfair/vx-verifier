/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export interface TowerStart {
  amount:
    | Amount
    | undefined;
  /** how "deep" the game is */
  levels: number;
  choicesPerLevel: number;
  minesPerLevel: number;
  houseEdge: number;
}

export interface TowerMove {
  /** Note, this is 0 index'd */
  choice: number;
}

export interface Tower {
  start?: TowerStart | undefined;
  move?: TowerMove | undefined;
  cashout?: boolean | undefined;
}

function createBaseTowerStart(): TowerStart {
  return { amount: undefined, levels: 0, choicesPerLevel: 0, minesPerLevel: 0, houseEdge: 0 };
}

export const TowerStart = {
  encode(message: TowerStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TowerStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTowerStart();
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

  fromJSON(object: any): TowerStart {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      levels: isSet(object.levels) ? globalThis.Number(object.levels) : 0,
      choicesPerLevel: isSet(object.choicesPerLevel) ? globalThis.Number(object.choicesPerLevel) : 0,
      minesPerLevel: isSet(object.minesPerLevel) ? globalThis.Number(object.minesPerLevel) : 0,
      houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0,
    };
  },

  toJSON(message: TowerStart): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
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

  create<I extends Exact<DeepPartial<TowerStart>, I>>(base?: I): TowerStart {
    return TowerStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TowerStart>, I>>(object: I): TowerStart {
    const message = createBaseTowerStart();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.levels = object.levels ?? 0;
    message.choicesPerLevel = object.choicesPerLevel ?? 0;
    message.minesPerLevel = object.minesPerLevel ?? 0;
    message.houseEdge = object.houseEdge ?? 0;
    return message;
  },
};

function createBaseTowerMove(): TowerMove {
  return { choice: 0 };
}

export const TowerMove = {
  encode(message: TowerMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.choice !== 0) {
      writer.uint32(8).int32(message.choice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TowerMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): TowerMove {
    return { choice: isSet(object.choice) ? globalThis.Number(object.choice) : 0 };
  },

  toJSON(message: TowerMove): unknown {
    const obj: any = {};
    if (message.choice !== 0) {
      obj.choice = Math.round(message.choice);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TowerMove>, I>>(base?: I): TowerMove {
    return TowerMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TowerMove>, I>>(object: I): TowerMove {
    const message = createBaseTowerMove();
    message.choice = object.choice ?? 0;
    return message;
  },
};

function createBaseTower(): Tower {
  return { start: undefined, move: undefined, cashout: undefined };
}

export const Tower = {
  encode(message: Tower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      TowerStart.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.move !== undefined) {
      TowerMove.encode(message.move, writer.uint32(18).fork()).ldelim();
    }
    if (message.cashout !== undefined) {
      writer.uint32(24).bool(message.cashout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = TowerStart.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.move = TowerMove.decode(reader, reader.uint32());
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

  fromJSON(object: any): Tower {
    return {
      start: isSet(object.start) ? TowerStart.fromJSON(object.start) : undefined,
      move: isSet(object.move) ? TowerMove.fromJSON(object.move) : undefined,
      cashout: isSet(object.cashout) ? globalThis.Boolean(object.cashout) : undefined,
    };
  },

  toJSON(message: Tower): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = TowerStart.toJSON(message.start);
    }
    if (message.move !== undefined) {
      obj.move = TowerMove.toJSON(message.move);
    }
    if (message.cashout !== undefined) {
      obj.cashout = message.cashout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tower>, I>>(base?: I): Tower {
    return Tower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tower>, I>>(object: I): Tower {
    const message = createBaseTower();
    message.start = (object.start !== undefined && object.start !== null)
      ? TowerStart.fromPartial(object.start)
      : undefined;
    message.move = (object.move !== undefined && object.move !== null) ? TowerMove.fromPartial(object.move) : undefined;
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
