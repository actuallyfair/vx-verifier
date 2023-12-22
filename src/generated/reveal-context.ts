/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface StandardDerivation {
  playerSeed: string;
}

export interface HashChainDerivation {
}

export interface RevealContext {
  standardDerivation?: StandardDerivation | undefined;
  hashChainDerivation?: HashChainDerivation | undefined;
}

function createBaseStandardDerivation(): StandardDerivation {
  return { playerSeed: "" };
}

export const StandardDerivation = {
  encode(message: StandardDerivation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerSeed !== "") {
      writer.uint32(10).string(message.playerSeed);
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
    return { playerSeed: isSet(object.playerSeed) ? globalThis.String(object.playerSeed) : "" };
  },

  toJSON(message: StandardDerivation): unknown {
    const obj: any = {};
    if (message.playerSeed !== "") {
      obj.playerSeed = message.playerSeed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StandardDerivation>, I>>(base?: I): StandardDerivation {
    return StandardDerivation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StandardDerivation>, I>>(object: I): StandardDerivation {
    const message = createBaseStandardDerivation();
    message.playerSeed = object.playerSeed ?? "";
    return message;
  },
};

function createBaseHashChainDerivation(): HashChainDerivation {
  return {};
}

export const HashChainDerivation = {
  encode(_: HashChainDerivation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashChainDerivation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashChainDerivation();
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

  fromJSON(_: any): HashChainDerivation {
    return {};
  },

  toJSON(_: HashChainDerivation): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HashChainDerivation>, I>>(base?: I): HashChainDerivation {
    return HashChainDerivation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HashChainDerivation>, I>>(_: I): HashChainDerivation {
    const message = createBaseHashChainDerivation();
    return message;
  },
};

function createBaseRevealContext(): RevealContext {
  return { standardDerivation: undefined, hashChainDerivation: undefined };
}

export const RevealContext = {
  encode(message: RevealContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standardDerivation !== undefined) {
      StandardDerivation.encode(message.standardDerivation, writer.uint32(10).fork()).ldelim();
    }
    if (message.hashChainDerivation !== undefined) {
      HashChainDerivation.encode(message.hashChainDerivation, writer.uint32(18).fork()).ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hashChainDerivation = HashChainDerivation.decode(reader, reader.uint32());
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
      hashChainDerivation: isSet(object.hashChainDerivation)
        ? HashChainDerivation.fromJSON(object.hashChainDerivation)
        : undefined,
    };
  },

  toJSON(message: RevealContext): unknown {
    const obj: any = {};
    if (message.standardDerivation !== undefined) {
      obj.standardDerivation = StandardDerivation.toJSON(message.standardDerivation);
    }
    if (message.hashChainDerivation !== undefined) {
      obj.hashChainDerivation = HashChainDerivation.toJSON(message.hashChainDerivation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RevealContext>, I>>(base?: I): RevealContext {
    return RevealContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RevealContext>, I>>(object: I): RevealContext {
    const message = createBaseRevealContext();
    message.standardDerivation = (object.standardDerivation !== undefined && object.standardDerivation !== null)
      ? StandardDerivation.fromPartial(object.standardDerivation)
      : undefined;
    message.hashChainDerivation = (object.hashChainDerivation !== undefined && object.hashChainDerivation !== null)
      ? HashChainDerivation.fromPartial(object.hashChainDerivation)
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
