/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** This is for a wager that is multiplayer crash game */
export interface Crash {
  /** This should be 0 for variable / undefined house edge */
  houseEdge: number;
}

function createBaseCrash(): Crash {
  return { houseEdge: 0 };
}

export const Crash = {
  encode(message: Crash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.houseEdge !== 0) {
      writer.uint32(9).double(message.houseEdge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Crash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): Crash {
    return { houseEdge: isSet(object.houseEdge) ? globalThis.Number(object.houseEdge) : 0 };
  },

  toJSON(message: Crash): unknown {
    const obj: any = {};
    if (message.houseEdge !== 0) {
      obj.houseEdge = message.houseEdge;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Crash>, I>>(base?: I): Crash {
    return Crash.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Crash>, I>>(object: I): Crash {
    const message = createBaseCrash();
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
