/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** This is a very simple coin toss with 50/50 odds. Does not have amounts as its just for demo apps */
export interface FairCoinToss {
  playerChoice: FairCoinToss_Choice;
}

export enum FairCoinToss_Choice {
  HEADS = 0,
  TAILS = 1,
  UNRECOGNIZED = -1,
}

export function fairCoinToss_ChoiceFromJSON(object: any): FairCoinToss_Choice {
  switch (object) {
    case 0:
    case "HEADS":
      return FairCoinToss_Choice.HEADS;
    case 1:
    case "TAILS":
      return FairCoinToss_Choice.TAILS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FairCoinToss_Choice.UNRECOGNIZED;
  }
}

export function fairCoinToss_ChoiceToJSON(object: FairCoinToss_Choice): string {
  switch (object) {
    case FairCoinToss_Choice.HEADS:
      return "HEADS";
    case FairCoinToss_Choice.TAILS:
      return "TAILS";
    case FairCoinToss_Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFairCoinToss(): FairCoinToss {
  return { playerChoice: 0 };
}

export const FairCoinToss = {
  encode(message: FairCoinToss, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerChoice !== 0) {
      writer.uint32(8).int32(message.playerChoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FairCoinToss {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFairCoinToss();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playerChoice = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FairCoinToss {
    return { playerChoice: isSet(object.playerChoice) ? fairCoinToss_ChoiceFromJSON(object.playerChoice) : 0 };
  },

  toJSON(message: FairCoinToss): unknown {
    const obj: any = {};
    if (message.playerChoice !== 0) {
      obj.playerChoice = fairCoinToss_ChoiceToJSON(message.playerChoice);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FairCoinToss>, I>>(base?: I): FairCoinToss {
    return FairCoinToss.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FairCoinToss>, I>>(object: I): FairCoinToss {
    const message = createBaseFairCoinToss();
    message.playerChoice = object.playerChoice ?? 0;
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
