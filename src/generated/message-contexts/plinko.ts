/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export interface Plinko {
  amount: Amount | undefined;
  possibilities: number[];
}

function createBasePlinko(): Plinko {
  return { amount: undefined, possibilities: [] };
}

export const Plinko = {
  encode(message: Plinko, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.possibilities) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plinko {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlinko();
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
          if (tag === 17) {
            message.possibilities.push(reader.double());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.possibilities.push(reader.double());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Plinko {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      possibilities: globalThis.Array.isArray(object?.possibilities)
        ? object.possibilities.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Plinko): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
    }
    if (message.possibilities?.length) {
      obj.possibilities = message.possibilities;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plinko>, I>>(base?: I): Plinko {
    return Plinko.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plinko>, I>>(object: I): Plinko {
    const message = createBasePlinko();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.possibilities = object.possibilities?.map((e) => e) || [];
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
