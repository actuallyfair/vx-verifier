/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** This is for a wager that is a variable-house-edge  multiplayer crash game */
export interface VHEMPCrash {
}

function createBaseVHEMPCrash(): VHEMPCrash {
  return {};
}

export const VHEMPCrash = {
  encode(_: VHEMPCrash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VHEMPCrash {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVHEMPCrash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): VHEMPCrash {
    return {};
  },

  toJSON(_: VHEMPCrash): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<VHEMPCrash>, I>>(base?: I): VHEMPCrash {
    return VHEMPCrash.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VHEMPCrash>, I>>(_: I): VHEMPCrash {
    const message = createBaseVHEMPCrash();
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
