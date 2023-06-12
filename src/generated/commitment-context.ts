/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** this is a pretty standard */
export interface Sha256Commitment {
}

/** for multiplayer games like crash */
export interface Sha256Chain {
}

export interface CommitmentContext {
  sha256Commitment?: Sha256Commitment | undefined;
  sha256Chain?: Sha256Chain | undefined;
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
    return Sha256Commitment.fromPartial(base ?? {});
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
    return Sha256Chain.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Sha256Chain>, I>>(_: I): Sha256Chain {
    const message = createBaseSha256Chain();
    return message;
  },
};

function createBaseCommitmentContext(): CommitmentContext {
  return { sha256Commitment: undefined, sha256Chain: undefined };
}

export const CommitmentContext = {
  encode(message: CommitmentContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sha256Commitment !== undefined) {
      Sha256Commitment.encode(message.sha256Commitment, writer.uint32(10).fork()).ldelim();
    }
    if (message.sha256Chain !== undefined) {
      Sha256Chain.encode(message.sha256Chain, writer.uint32(18).fork()).ldelim();
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
    };
  },

  toJSON(message: CommitmentContext): unknown {
    const obj: any = {};
    message.sha256Commitment !== undefined &&
      (obj.sha256Commitment = message.sha256Commitment ? Sha256Commitment.toJSON(message.sha256Commitment) : undefined);
    message.sha256Chain !== undefined &&
      (obj.sha256Chain = message.sha256Chain ? Sha256Chain.toJSON(message.sha256Chain) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommitmentContext>, I>>(base?: I): CommitmentContext {
    return CommitmentContext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommitmentContext>, I>>(object: I): CommitmentContext {
    const message = createBaseCommitmentContext();
    message.sha256Commitment = (object.sha256Commitment !== undefined && object.sha256Commitment !== null)
      ? Sha256Commitment.fromPartial(object.sha256Commitment)
      : undefined;
    message.sha256Chain = (object.sha256Chain !== undefined && object.sha256Chain !== null)
      ? Sha256Chain.fromPartial(object.sha256Chain)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

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
