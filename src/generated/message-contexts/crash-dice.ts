/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export interface CrashDice {
  amount: Amount | undefined;
  target: number;
  houseEdge: number;
}

function createBaseCrashDice(): CrashDice {
  return { amount: undefined, target: 0, houseEdge: 0 };
}

export const CrashDice = {
  encode(message: CrashDice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.target !== 0) {
      writer.uint32(17).double(message.target);
    }
    if (message.houseEdge !== 0) {
      writer.uint32(25).double(message.houseEdge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrashDice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrashDice();
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
          if (tag !== 17) {
            break;
          }

          message.target = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
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

  fromJSON(object: any): CrashDice {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      target: isSet(object.target) ? globalThis.Number(object.target) : 0,
      houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0,
    };
  },

  toJSON(message: CrashDice): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
    }
    if (message.target !== 0) {
      obj.target = message.target;
    }
    if (message.houseEdge !== 0) {
      obj.houseEdge = message.houseEdge;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CrashDice>, I>>(base?: I): CrashDice {
    return CrashDice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CrashDice>, I>>(object: I): CrashDice {
    const message = createBaseCrashDice();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.target = object.target ?? 0;
    message.houseEdge = object.houseEdge ?? 0;
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
