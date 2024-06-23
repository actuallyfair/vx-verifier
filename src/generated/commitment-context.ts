/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** this is a pretty standard */
export interface Sha256Commitment {
}

/** for multiplayer games like crash */
export interface Sha256Chain {
}

/** This allows you to use the same prefix for different groups of commitments, so each commitment will have the same .startsWith */
export interface PrefixPartioned {
  prefix: Uint8Array;
  commitment: CommitmentContext | undefined;
}

export interface CommitmentContext {
  sha256Commitment?: Sha256Commitment | undefined;
  sha256Chain?: Sha256Chain | undefined;
  prefixPartioned?: PrefixPartioned | undefined;
}

function createBaseSha256Commitment(): Sha256Commitment {
  return {};
}

export const Sha256Commitment = {
  encode(_: Sha256Commitment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sha256Commitment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSha256Commitment();
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

  fromJSON(_: any): Sha256Commitment {
    return {};
  },

  toJSON(_: Sha256Commitment): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Sha256Commitment>, I>>(base?: I): Sha256Commitment {
    return Sha256Commitment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sha256Commitment>, I>>(_: I): Sha256Commitment {
    const message = createBaseSha256Commitment();
    return message;
  },
};

function createBaseSha256Chain(): Sha256Chain {
  return {};
}

export const Sha256Chain = {
  encode(_: Sha256Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sha256Chain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSha256Chain();
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

  fromJSON(_: any): Sha256Chain {
    return {};
  },

  toJSON(_: Sha256Chain): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Sha256Chain>, I>>(base?: I): Sha256Chain {
    return Sha256Chain.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sha256Chain>, I>>(_: I): Sha256Chain {
    const message = createBaseSha256Chain();
    return message;
  },
};

function createBasePrefixPartioned(): PrefixPartioned {
  return { prefix: new Uint8Array(0), commitment: undefined };
}

export const PrefixPartioned = {
  encode(message: PrefixPartioned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix.length !== 0) {
      writer.uint32(10).bytes(message.prefix);
    }
    if (message.commitment !== undefined) {
      CommitmentContext.encode(message.commitment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrefixPartioned {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrefixPartioned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prefix = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commitment = CommitmentContext.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrefixPartioned {
    return {
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
      commitment: isSet(object.commitment) ? CommitmentContext.fromJSON(object.commitment) : undefined,
    };
  },

  toJSON(message: PrefixPartioned): unknown {
    const obj: any = {};
    if (message.prefix.length !== 0) {
      obj.prefix = base64FromBytes(message.prefix);
    }
    if (message.commitment !== undefined) {
      obj.commitment = CommitmentContext.toJSON(message.commitment);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrefixPartioned>, I>>(base?: I): PrefixPartioned {
    return PrefixPartioned.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrefixPartioned>, I>>(object: I): PrefixPartioned {
    const message = createBasePrefixPartioned();
    message.prefix = object.prefix ?? new Uint8Array(0);
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? CommitmentContext.fromPartial(object.commitment)
      : undefined;
    return message;
  },
};

function createBaseCommitmentContext(): CommitmentContext {
  return { sha256Commitment: undefined, sha256Chain: undefined, prefixPartioned: undefined };
}

export const CommitmentContext = {
  encode(message: CommitmentContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sha256Commitment !== undefined) {
      Sha256Commitment.encode(message.sha256Commitment, writer.uint32(10).fork()).ldelim();
    }
    if (message.sha256Chain !== undefined) {
      Sha256Chain.encode(message.sha256Chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.prefixPartioned !== undefined) {
      PrefixPartioned.encode(message.prefixPartioned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitmentContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sha256Commitment = Sha256Commitment.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sha256Chain = Sha256Chain.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prefixPartioned = PrefixPartioned.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommitmentContext {
    return {
      sha256Commitment: isSet(object.sha256Commitment) ? Sha256Commitment.fromJSON(object.sha256Commitment) : undefined,
      sha256Chain: isSet(object.sha256Chain) ? Sha256Chain.fromJSON(object.sha256Chain) : undefined,
      prefixPartioned: isSet(object.prefixPartioned) ? PrefixPartioned.fromJSON(object.prefixPartioned) : undefined,
    };
  },

  toJSON(message: CommitmentContext): unknown {
    const obj: any = {};
    if (message.sha256Commitment !== undefined) {
      obj.sha256Commitment = Sha256Commitment.toJSON(message.sha256Commitment);
    }
    if (message.sha256Chain !== undefined) {
      obj.sha256Chain = Sha256Chain.toJSON(message.sha256Chain);
    }
    if (message.prefixPartioned !== undefined) {
      obj.prefixPartioned = PrefixPartioned.toJSON(message.prefixPartioned);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommitmentContext>, I>>(base?: I): CommitmentContext {
    return CommitmentContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommitmentContext>, I>>(object: I): CommitmentContext {
    const message = createBaseCommitmentContext();
    message.sha256Commitment = (object.sha256Commitment !== undefined && object.sha256Commitment !== null)
      ? Sha256Commitment.fromPartial(object.sha256Commitment)
      : undefined;
    message.sha256Chain = (object.sha256Chain !== undefined && object.sha256Chain !== null)
      ? Sha256Chain.fromPartial(object.sha256Chain)
      : undefined;
    message.prefixPartioned = (object.prefixPartioned !== undefined && object.prefixPartioned !== null)
      ? PrefixPartioned.fromPartial(object.prefixPartioned)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
