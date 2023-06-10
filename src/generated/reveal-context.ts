/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface StandardDerivation {
  commitmentPreimage: Uint8Array;
  playerSeed: string;
}

export interface RevealContext {
  standardDerivation?: StandardDerivation | undefined;
}

function createBaseStandardDerivation(): StandardDerivation {
  return { commitmentPreimage: new Uint8Array(), playerSeed: "" };
}

export const StandardDerivation = {
  encode(message: StandardDerivation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitmentPreimage.length !== 0) {
      writer.uint32(10).bytes(message.commitmentPreimage);
    }
    if (message.playerSeed !== "") {
      writer.uint32(18).string(message.playerSeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StandardDerivation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStandardDerivation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitmentPreimage = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerSeed = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StandardDerivation {
    return {
      commitmentPreimage: isSet(object.commitmentPreimage)
        ? bytesFromBase64(object.commitmentPreimage)
        : new Uint8Array(),
      playerSeed: isSet(object.playerSeed) ? String(object.playerSeed) : "",
    };
  },

  toJSON(message: StandardDerivation): unknown {
    const obj: any = {};
    message.commitmentPreimage !== undefined &&
      (obj.commitmentPreimage = base64FromBytes(
        message.commitmentPreimage !== undefined ? message.commitmentPreimage : new Uint8Array(),
      ));
    message.playerSeed !== undefined && (obj.playerSeed = message.playerSeed);
    return obj;
  },

  create<I extends Exact<DeepPartial<StandardDerivation>, I>>(base?: I): StandardDerivation {
    return StandardDerivation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StandardDerivation>, I>>(object: I): StandardDerivation {
    const message = createBaseStandardDerivation();
    message.commitmentPreimage = object.commitmentPreimage ?? new Uint8Array();
    message.playerSeed = object.playerSeed ?? "";
    return message;
  },
};

function createBaseRevealContext(): RevealContext {
  return { standardDerivation: undefined };
}

export const RevealContext = {
  encode(message: RevealContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standardDerivation !== undefined) {
      StandardDerivation.encode(message.standardDerivation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RevealContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevealContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.standardDerivation = StandardDerivation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RevealContext {
    return {
      standardDerivation: isSet(object.standardDerivation)
        ? StandardDerivation.fromJSON(object.standardDerivation)
        : undefined,
    };
  },

  toJSON(message: RevealContext): unknown {
    const obj: any = {};
    message.standardDerivation !== undefined && (obj.standardDerivation = message.standardDerivation
      ? StandardDerivation.toJSON(message.standardDerivation)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RevealContext>, I>>(base?: I): RevealContext {
    return RevealContext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RevealContext>, I>>(object: I): RevealContext {
    const message = createBaseRevealContext();
    message.standardDerivation = (object.standardDerivation !== undefined && object.standardDerivation !== null)
      ? StandardDerivation.fromPartial(object.standardDerivation)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
