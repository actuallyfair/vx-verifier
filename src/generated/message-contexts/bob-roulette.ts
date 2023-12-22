/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

/** This is for a wager that is a orange, black or bonus  multiplayer roulette game */
export interface BOBRoulette {
  blackBets: BOBRoulette_Bet[];
  orangeBets: BOBRoulette_Bet[];
  bonusBets: BOBRoulette_Bet[];
}

export interface BOBRoulette_Bet {
  uname: string;
  amount: Amount | undefined;
}

function createBaseBOBRoulette(): BOBRoulette {
  return { blackBets: [], orangeBets: [], bonusBets: [] };
}

export const BOBRoulette = {
  encode(message: BOBRoulette, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blackBets) {
      BOBRoulette_Bet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.orangeBets) {
      BOBRoulette_Bet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bonusBets) {
      BOBRoulette_Bet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BOBRoulette {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBOBRoulette();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blackBets.push(BOBRoulette_Bet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orangeBets.push(BOBRoulette_Bet.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bonusBets.push(BOBRoulette_Bet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BOBRoulette {
    return {
      blackBets: globalThis.Array.isArray(object?.blackBets)
        ? object.blackBets.map((e: any) => BOBRoulette_Bet.fromJSON(e))
        : [],
      orangeBets: globalThis.Array.isArray(object?.orangeBets)
        ? object.orangeBets.map((e: any) => BOBRoulette_Bet.fromJSON(e))
        : [],
      bonusBets: globalThis.Array.isArray(object?.bonusBets)
        ? object.bonusBets.map((e: any) => BOBRoulette_Bet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BOBRoulette): unknown {
    const obj: any = {};
    if (message.blackBets?.length) {
      obj.blackBets = message.blackBets.map((e) => BOBRoulette_Bet.toJSON(e));
    }
    if (message.orangeBets?.length) {
      obj.orangeBets = message.orangeBets.map((e) => BOBRoulette_Bet.toJSON(e));
    }
    if (message.bonusBets?.length) {
      obj.bonusBets = message.bonusBets.map((e) => BOBRoulette_Bet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BOBRoulette>, I>>(base?: I): BOBRoulette {
    return BOBRoulette.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BOBRoulette>, I>>(object: I): BOBRoulette {
    const message = createBaseBOBRoulette();
    message.blackBets = object.blackBets?.map((e) => BOBRoulette_Bet.fromPartial(e)) || [];
    message.orangeBets = object.orangeBets?.map((e) => BOBRoulette_Bet.fromPartial(e)) || [];
    message.bonusBets = object.bonusBets?.map((e) => BOBRoulette_Bet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBOBRoulette_Bet(): BOBRoulette_Bet {
  return { uname: "", amount: undefined };
}

export const BOBRoulette_Bet = {
  encode(message: BOBRoulette_Bet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uname !== "") {
      writer.uint32(10).string(message.uname);
    }
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BOBRoulette_Bet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): BOBRoulette_Bet {
    return {
      uname: isSet(object.uname) ? globalThis.String(object.uname) : "",
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: BOBRoulette_Bet): unknown {
    const obj: any = {};
    if (message.uname !== "") {
      obj.uname = message.uname;
    }
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BOBRoulette_Bet>, I>>(base?: I): BOBRoulette_Bet {
    return BOBRoulette_Bet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BOBRoulette_Bet>, I>>(object: I): BOBRoulette_Bet {
    const message = createBaseBOBRoulette_Bet();
    message.uname = object.uname ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
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
