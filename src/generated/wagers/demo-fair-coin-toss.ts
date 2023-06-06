/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** This is a very simple coin toss with 50/50 odds. Does not have amounts as its just for demo apps */
export interface DemoFairCoinToss {
  playerChoice: DemoFairCoinToss_Choice;
}

export enum DemoFairCoinToss_Choice {
  HEADS = 0,
  TAILS = 1,
  UNRECOGNIZED = -1,
}

export function demoFairCoinToss_ChoiceFromJSON(object: any): DemoFairCoinToss_Choice {
  switch (object) {
    case 0:
    case "HEADS":
      return DemoFairCoinToss_Choice.HEADS;
    case 1:
    case "TAILS":
      return DemoFairCoinToss_Choice.TAILS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DemoFairCoinToss_Choice.UNRECOGNIZED;
  }
}

export function demoFairCoinToss_ChoiceToJSON(object: DemoFairCoinToss_Choice): string {
  switch (object) {
    case DemoFairCoinToss_Choice.HEADS:
      return "HEADS";
    case DemoFairCoinToss_Choice.TAILS:
      return "TAILS";
    case DemoFairCoinToss_Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseDemoFairCoinToss(): DemoFairCoinToss {
  return { playerChoice: 0 };
}

export const DemoFairCoinToss = {
  encode(message: DemoFairCoinToss, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerChoice !== 0) {
      writer.uint32(8).int32(message.playerChoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DemoFairCoinToss {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDemoFairCoinToss();
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

  fromJSON(object: any): DemoFairCoinToss {
    return { playerChoice: isSet(object.playerChoice) ? demoFairCoinToss_ChoiceFromJSON(object.playerChoice) : 0 };
  },

  toJSON(message: DemoFairCoinToss): unknown {
    const obj: any = {};
    message.playerChoice !== undefined && (obj.playerChoice = demoFairCoinToss_ChoiceToJSON(message.playerChoice));
    return obj;
  },

  create<I extends Exact<DeepPartial<DemoFairCoinToss>, I>>(base?: I): DemoFairCoinToss {
    return DemoFairCoinToss.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DemoFairCoinToss>, I>>(object: I): DemoFairCoinToss {
    const message = createBaseDemoFairCoinToss();
    message.playerChoice = object.playerChoice ?? 0;
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
