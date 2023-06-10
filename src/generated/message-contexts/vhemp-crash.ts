/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** This is for a wager that is a variable-house-edge  multiplayer crash game */
export interface VHEMPCrash {
  gameId: number;
}

function createBaseVHEMPCrash(): VHEMPCrash {
  return { gameId: 0 };
}

export const VHEMPCrash = {
  encode(message: VHEMPCrash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).uint32(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VHEMPCrash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVHEMPCrash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VHEMPCrash {
    return { gameId: isSet(object.gameId) ? Number(object.gameId) : 0 };
  },

  toJSON(message: VHEMPCrash): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<VHEMPCrash>, I>>(base?: I): VHEMPCrash {
    return VHEMPCrash.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VHEMPCrash>, I>>(object: I): VHEMPCrash {
    const message = createBaseVHEMPCrash();
    message.gameId = object.gameId ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
