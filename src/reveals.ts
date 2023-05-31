/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "reveals";

export interface StandardDerivation {
  playerSeed: string;
}

export interface Reveal {
  standardDerivation?: StandardDerivation | undefined;
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
    return { playerSeed: isSet(object.playerSeed) ? String(object.playerSeed) : "" };
  },

  toJSON(message: StandardDerivation): unknown {
    const obj: any = {};
    message.playerSeed !== undefined && (obj.playerSeed = message.playerSeed);
    return obj;
  },

  create<I extends Exact<DeepPartial<StandardDerivation>, I>>(base?: I): StandardDerivation {
    return StandardDerivation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StandardDerivation>, I>>(object: I): StandardDerivation {
    const message = createBaseStandardDerivation();
    message.playerSeed = object.playerSeed ?? "";
    return message;
  },
};

function createBaseReveal(): Reveal {
  return { standardDerivation: undefined };
}

export const Reveal = {
  encode(message: Reveal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standardDerivation !== undefined) {
      StandardDerivation.encode(message.standardDerivation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reveal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReveal();
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

  fromJSON(object: any): Reveal {
    return {
      standardDerivation: isSet(object.standardDerivation)
        ? StandardDerivation.fromJSON(object.standardDerivation)
        : undefined,
    };
  },

  toJSON(message: Reveal): unknown {
    const obj: any = {};
    message.standardDerivation !== undefined && (obj.standardDerivation = message.standardDerivation
      ? StandardDerivation.toJSON(message.standardDerivation)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Reveal>, I>>(base?: I): Reveal {
    return Reveal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Reveal>, I>>(object: I): Reveal {
    const message = createBaseReveal();
    message.standardDerivation = (object.standardDerivation !== undefined && object.standardDerivation !== null)
      ? StandardDerivation.fromPartial(object.standardDerivation)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
