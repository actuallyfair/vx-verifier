/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FairCoinToss } from "./message-contexts/fair-coin-toss";
import { HiLo } from "./message-contexts/hilo";
import { VHEMPCrash } from "./message-contexts/vhemp-crash";

export interface MessageContext {
  fairCoinToss?: FairCoinToss | undefined;
  vhempCrash?: VHEMPCrash | undefined;
  hilo?: HiLo | undefined;
}

function createBaseMessageContext(): MessageContext {
  return { fairCoinToss: undefined, vhempCrash: undefined, hilo: undefined };
}

export const MessageContext = {
  encode(message: MessageContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fairCoinToss !== undefined) {
      FairCoinToss.encode(message.fairCoinToss, writer.uint32(10).fork()).ldelim();
    }
    if (message.vhempCrash !== undefined) {
      VHEMPCrash.encode(message.vhempCrash, writer.uint32(18).fork()).ldelim();
    }
    if (message.hilo !== undefined) {
      HiLo.encode(message.hilo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fairCoinToss = FairCoinToss.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vhempCrash = VHEMPCrash.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hilo = HiLo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageContext {
    return {
      fairCoinToss: isSet(object.fairCoinToss) ? FairCoinToss.fromJSON(object.fairCoinToss) : undefined,
      vhempCrash: isSet(object.vhempCrash) ? VHEMPCrash.fromJSON(object.vhempCrash) : undefined,
      hilo: isSet(object.hilo) ? HiLo.fromJSON(object.hilo) : undefined,
    };
  },

  toJSON(message: MessageContext): unknown {
    const obj: any = {};
    message.fairCoinToss !== undefined &&
      (obj.fairCoinToss = message.fairCoinToss ? FairCoinToss.toJSON(message.fairCoinToss) : undefined);
    message.vhempCrash !== undefined &&
      (obj.vhempCrash = message.vhempCrash ? VHEMPCrash.toJSON(message.vhempCrash) : undefined);
    message.hilo !== undefined && (obj.hilo = message.hilo ? HiLo.toJSON(message.hilo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageContext>, I>>(base?: I): MessageContext {
    return MessageContext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageContext>, I>>(object: I): MessageContext {
    const message = createBaseMessageContext();
    message.fairCoinToss = (object.fairCoinToss !== undefined && object.fairCoinToss !== null)
      ? FairCoinToss.fromPartial(object.fairCoinToss)
      : undefined;
    message.vhempCrash = (object.vhempCrash !== undefined && object.vhempCrash !== null)
      ? VHEMPCrash.fromPartial(object.vhempCrash)
      : undefined;
    message.hilo = (object.hilo !== undefined && object.hilo !== null) ? HiLo.fromPartial(object.hilo) : undefined;
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
