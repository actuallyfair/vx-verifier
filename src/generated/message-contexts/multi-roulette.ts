/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export interface MultiRoulette {
  outcomes: MultiRoulette_Outcome[];
}

export interface MultiRoulette_Bet {
  uname: string;
  amount: Amount | undefined;
}

export interface MultiRoulette_Outcome {
  multiplier: number;
  probability: number;
  bets: MultiRoulette_Bet[];
}

function createBaseMultiRoulette(): MultiRoulette {
  return { outcomes: [] };
}

export const MultiRoulette = {
  encode(message: MultiRoulette, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outcomes) {
      MultiRoulette_Outcome.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiRoulette();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outcomes.push(MultiRoulette_Outcome.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiRoulette {
    return {
      outcomes: globalThis.Array.isArray(object?.outcomes)
        ? object.outcomes.map((e: any) => MultiRoulette_Outcome.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MultiRoulette): unknown {
    const obj: any = {};
    if (message.outcomes?.length) {
      obj.outcomes = message.outcomes.map((e) => MultiRoulette_Outcome.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiRoulette>, I>>(base?: I): MultiRoulette {
    return MultiRoulette.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiRoulette>, I>>(object: I): MultiRoulette {
    const message = createBaseMultiRoulette();
    message.outcomes = object.outcomes?.map((e) => MultiRoulette_Outcome.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMultiRoulette_Bet(): MultiRoulette_Bet {
  return { uname: "", amount: undefined };
}

export const MultiRoulette_Bet = {
  encode(message: MultiRoulette_Bet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uname !== "") {
      writer.uint32(10).string(message.uname);
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette_Bet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiRoulette_Bet {
    return {
      uname: isSet(object.uname) ? globalThis.String(object.uname) : "",
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MultiRoulette_Bet): unknown {
    const obj: any = {};
    if (message.uname !== "") {
      obj.uname = message.uname;
    }
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiRoulette_Bet>, I>>(base?: I): MultiRoulette_Bet {
    return MultiRoulette_Bet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiRoulette_Bet>, I>>(object: I): MultiRoulette_Bet {
    const message = createBaseMultiRoulette_Bet();
    message.uname = object.uname ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMultiRoulette_Outcome(): MultiRoulette_Outcome {
  return { multiplier: 0, probability: 0, bets: [] };
}

export const MultiRoulette_Outcome = {
  encode(message: MultiRoulette_Outcome, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.multiplier !== 0) {
      writer.uint32(9).double(message.multiplier);
    }
    if (message.probability !== 0) {
      writer.uint32(17).double(message.probability);
    }
    for (const v of message.bets) {
      MultiRoulette_Bet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiRoulette_Outcome {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.bets.push(MultiRoulette_Bet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiRoulette_Outcome {
    return {
      multiplier: isSet(object.multiplier) ? globalThis.Number(object.multiplier) : 0,
      probability: isSet(object.probability) ? globalThis.Number(object.probability) : 0,
      bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e: any) => MultiRoulette_Bet.fromJSON(e)) : [],
    };
  },

  toJSON(message: MultiRoulette_Outcome): unknown {
    const obj: any = {};
    if (message.multiplier !== 0) {
      obj.multiplier = message.multiplier;
    }
    if (message.probability !== 0) {
      obj.probability = message.probability;
    }
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => MultiRoulette_Bet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiRoulette_Outcome>, I>>(base?: I): MultiRoulette_Outcome {
    return MultiRoulette_Outcome.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiRoulette_Outcome>, I>>(object: I): MultiRoulette_Outcome {
    const message = createBaseMultiRoulette_Outcome();
    message.multiplier = object.multiplier ?? 0;
    message.probability = object.probability ?? 0;
    message.bets = object.bets?.map((e) => MultiRoulette_Bet.fromPartial(e)) || [];
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
