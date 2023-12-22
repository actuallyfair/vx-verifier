/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Amount } from "../amount";

export enum Card {
  Unknown = 0,
  Ace = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
  UNRECOGNIZED = -1,
}

export function cardFromJSON(object: any): Card {
  switch (object) {
    case 0:
    case "Unknown":
      return Card.Unknown;
    case 1:
    case "Ace":
      return Card.Ace;
    case 2:
    case "Two":
      return Card.Two;
    case 3:
    case "Three":
      return Card.Three;
    case 4:
    case "Four":
      return Card.Four;
    case 5:
    case "Five":
      return Card.Five;
    case 6:
    case "Six":
      return Card.Six;
    case 7:
    case "Seven":
      return Card.Seven;
    case 8:
    case "Eight":
      return Card.Eight;
    case 9:
    case "Nine":
      return Card.Nine;
    case 10:
    case "Ten":
      return Card.Ten;
    case 11:
    case "Jack":
      return Card.Jack;
    case 12:
    case "Queen":
      return Card.Queen;
    case 13:
    case "King":
      return Card.King;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Card.UNRECOGNIZED;
  }
}

export function cardToJSON(object: Card): string {
  switch (object) {
    case Card.Unknown:
      return "Unknown";
    case Card.Ace:
      return "Ace";
    case Card.Two:
      return "Two";
    case Card.Three:
      return "Three";
    case Card.Four:
      return "Four";
    case Card.Five:
      return "Five";
    case Card.Six:
      return "Six";
    case Card.Seven:
      return "Seven";
    case Card.Eight:
      return "Eight";
    case Card.Nine:
      return "Nine";
    case Card.Ten:
      return "Ten";
    case Card.Jack:
      return "Jack";
    case Card.Queen:
      return "Queen";
    case Card.King:
      return "King";
    case Card.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HiLoStart {
  amount: Amount | undefined;
  startingCard: Card;
}

/** This is based on stakes hilo game */
export interface HiLoMove {
  playerChoice: HiLoMove_Choice;
  moveIndex: number;
}

export enum HiLoMove_Choice {
  Hi = 0,
  Lo = 1,
  Skip = 2,
  Cashout = 3,
  UNRECOGNIZED = -1,
}

export function hiLoMove_ChoiceFromJSON(object: any): HiLoMove_Choice {
  switch (object) {
    case 0:
    case "Hi":
      return HiLoMove_Choice.Hi;
    case 1:
    case "Lo":
      return HiLoMove_Choice.Lo;
    case 2:
    case "Skip":
      return HiLoMove_Choice.Skip;
    case 3:
    case "Cashout":
      return HiLoMove_Choice.Cashout;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HiLoMove_Choice.UNRECOGNIZED;
  }
}

export function hiLoMove_ChoiceToJSON(object: HiLoMove_Choice): string {
  switch (object) {
    case HiLoMove_Choice.Hi:
      return "Hi";
    case HiLoMove_Choice.Lo:
      return "Lo";
    case HiLoMove_Choice.Skip:
      return "Skip";
    case HiLoMove_Choice.Cashout:
      return "Cashout";
    case HiLoMove_Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HiLo {
  start?: HiLoStart | undefined;
  move?: HiLoMove | undefined;
}

function createBaseHiLoStart(): HiLoStart {
  return { amount: undefined, startingCard: 0 };
}

export const HiLoStart = {
  encode(message: HiLoStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingCard !== 0) {
      writer.uint32(16).int32(message.startingCard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiLoStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiLoStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startingCard = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiLoStart {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      startingCard: isSet(object.startingCard) ? cardFromJSON(object.startingCard) : 0,
    };
  },

  toJSON(message: HiLoStart): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = Amount.toJSON(message.amount);
    }
    if (message.startingCard !== 0) {
      obj.startingCard = cardToJSON(message.startingCard);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiLoStart>, I>>(base?: I): HiLoStart {
    return HiLoStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiLoStart>, I>>(object: I): HiLoStart {
    const message = createBaseHiLoStart();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.startingCard = object.startingCard ?? 0;
    return message;
  },
};

function createBaseHiLoMove(): HiLoMove {
  return { playerChoice: 0, moveIndex: 0 };
}

export const HiLoMove = {
  encode(message: HiLoMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerChoice !== 0) {
      writer.uint32(8).int32(message.playerChoice);
    }
    if (message.moveIndex !== 0) {
      writer.uint32(16).int32(message.moveIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiLoMove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiLoMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playerChoice = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.moveIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiLoMove {
    return {
      playerChoice: isSet(object.playerChoice) ? hiLoMove_ChoiceFromJSON(object.playerChoice) : 0,
      moveIndex: isSet(object.moveIndex) ? globalThis.Number(object.moveIndex) : 0,
    };
  },

  toJSON(message: HiLoMove): unknown {
    const obj: any = {};
    if (message.playerChoice !== 0) {
      obj.playerChoice = hiLoMove_ChoiceToJSON(message.playerChoice);
    }
    if (message.moveIndex !== 0) {
      obj.moveIndex = Math.round(message.moveIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiLoMove>, I>>(base?: I): HiLoMove {
    return HiLoMove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiLoMove>, I>>(object: I): HiLoMove {
    const message = createBaseHiLoMove();
    message.playerChoice = object.playerChoice ?? 0;
    message.moveIndex = object.moveIndex ?? 0;
    return message;
  },
};

function createBaseHiLo(): HiLo {
  return { start: undefined, move: undefined };
}

export const HiLo = {
  encode(message: HiLo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      HiLoStart.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    if (message.move !== undefined) {
      HiLoMove.encode(message.move, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HiLo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHiLo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = HiLoStart.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.move = HiLoMove.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HiLo {
    return {
      start: isSet(object.start) ? HiLoStart.fromJSON(object.start) : undefined,
      move: isSet(object.move) ? HiLoMove.fromJSON(object.move) : undefined,
    };
  },

  toJSON(message: HiLo): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = HiLoStart.toJSON(message.start);
    }
    if (message.move !== undefined) {
      obj.move = HiLoMove.toJSON(message.move);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HiLo>, I>>(base?: I): HiLo {
    return HiLo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HiLo>, I>>(object: I): HiLo {
    const message = createBaseHiLo();
    message.start = (object.start !== undefined && object.start !== null)
      ? HiLoStart.fromPartial(object.start)
      : undefined;
    message.move = (object.move !== undefined && object.move !== null) ? HiLoMove.fromPartial(object.move) : undefined;
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
