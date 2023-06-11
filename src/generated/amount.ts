/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Currency, currencyFromJSON, currencyToJSON } from "./currency";

export interface Amount {
  currency: Currency;
  value: bigint;
}

function createBaseAmount(): Amount {
  return { currency: 0, value: BigInt("0") };
}

export const Amount = {
  encode(message: Amount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== 0) {
      writer.uint32(8).int32(message.currency);
    }
    if (message.value !== BigInt("0")) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Amount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToBigint(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Amount {
    return {
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
      value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
    };
  },

  toJSON(message: Amount): unknown {
    const obj: any = {};
    message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
    message.value !== undefined && (obj.value = message.value.toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Amount>, I>>(base?: I): Amount {
    return Amount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Amount>, I>>(object: I): Amount {
    const message = createBaseAmount();
    message.currency = object.currency ?? 0;
    message.value = object.value ?? BigInt("0");
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
