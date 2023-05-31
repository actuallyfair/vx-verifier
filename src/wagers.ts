/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DemoFairCoinToss } from "./wagers/demo_fair_coin_toss";

export const protobufPackage = "wagers";

/** Define an enumeration for types of currencies. */
export enum Currency {
  CURRENCY_UNSPECIFIED = 0,
  /** BTC - Bitcoin */
  BTC = 1,
  UNRECOGNIZED = -1,
}

export function currencyFromJSON(object: any): Currency {
  switch (object) {
    case 0:
    case "CURRENCY_UNSPECIFIED":
      return Currency.CURRENCY_UNSPECIFIED;
    case 1:
    case "BTC":
      return Currency.BTC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Currency.UNRECOGNIZED;
  }
}

export function currencyToJSON(object: Currency): string {
  switch (object) {
    case Currency.CURRENCY_UNSPECIFIED:
      return "CURRENCY_UNSPECIFIED";
    case Currency.BTC:
      return "BTC";
    case Currency.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RockPaperScissorsWager {
  /** The player's choice. */
  playerChoice: RockPaperScissorsWager_Choice;
}

export enum RockPaperScissorsWager_Choice {
  ROCK = 0,
  PAPER = 1,
  SCISSORS = 2,
  UNRECOGNIZED = -1,
}

export function rockPaperScissorsWager_ChoiceFromJSON(object: any): RockPaperScissorsWager_Choice {
  switch (object) {
    case 0:
    case "ROCK":
      return RockPaperScissorsWager_Choice.ROCK;
    case 1:
    case "PAPER":
      return RockPaperScissorsWager_Choice.PAPER;
    case 2:
    case "SCISSORS":
      return RockPaperScissorsWager_Choice.SCISSORS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RockPaperScissorsWager_Choice.UNRECOGNIZED;
  }
}

export function rockPaperScissorsWager_ChoiceToJSON(object: RockPaperScissorsWager_Choice): string {
  switch (object) {
    case RockPaperScissorsWager_Choice.ROCK:
      return "ROCK";
    case RockPaperScissorsWager_Choice.PAPER:
      return "PAPER";
    case RockPaperScissorsWager_Choice.SCISSORS:
      return "SCISSORS";
    case RockPaperScissorsWager_Choice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DiceWager {
  /** The number that the roll must beat. */
  numberToBeat: number;
}

/** This is a simple example wager. A person */
export interface RouletteWager {
  /** The number that the player guesses. */
  numberGuessed: number;
  /** how much did they bet */
  amount: number;
  currency: Currency;
}

export interface Wager {
  rockPaperScissors?: RockPaperScissorsWager | undefined;
  diceWager?: DiceWager | undefined;
  rouletteWager?: RouletteWager | undefined;
  demoFairCoinToss?: DemoFairCoinToss | undefined;
}

function createBaseRockPaperScissorsWager(): RockPaperScissorsWager {
  return { playerChoice: 0 };
}

export const RockPaperScissorsWager = {
  encode(message: RockPaperScissorsWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerChoice !== 0) {
      writer.uint32(8).int32(message.playerChoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RockPaperScissorsWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRockPaperScissorsWager();
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

  fromJSON(object: any): RockPaperScissorsWager {
    return {
      playerChoice: isSet(object.playerChoice) ? rockPaperScissorsWager_ChoiceFromJSON(object.playerChoice) : 0,
    };
  },

  toJSON(message: RockPaperScissorsWager): unknown {
    const obj: any = {};
    message.playerChoice !== undefined &&
      (obj.playerChoice = rockPaperScissorsWager_ChoiceToJSON(message.playerChoice));
    return obj;
  },

  create<I extends Exact<DeepPartial<RockPaperScissorsWager>, I>>(base?: I): RockPaperScissorsWager {
    return RockPaperScissorsWager.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RockPaperScissorsWager>, I>>(object: I): RockPaperScissorsWager {
    const message = createBaseRockPaperScissorsWager();
    message.playerChoice = object.playerChoice ?? 0;
    return message;
  },
};

function createBaseDiceWager(): DiceWager {
  return { numberToBeat: 0 };
}

export const DiceWager = {
  encode(message: DiceWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberToBeat !== 0) {
      writer.uint32(8).int32(message.numberToBeat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiceWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiceWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberToBeat = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DiceWager {
    return { numberToBeat: isSet(object.numberToBeat) ? Number(object.numberToBeat) : 0 };
  },

  toJSON(message: DiceWager): unknown {
    const obj: any = {};
    message.numberToBeat !== undefined && (obj.numberToBeat = Math.round(message.numberToBeat));
    return obj;
  },

  create<I extends Exact<DeepPartial<DiceWager>, I>>(base?: I): DiceWager {
    return DiceWager.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiceWager>, I>>(object: I): DiceWager {
    const message = createBaseDiceWager();
    message.numberToBeat = object.numberToBeat ?? 0;
    return message;
  },
};

function createBaseRouletteWager(): RouletteWager {
  return { numberGuessed: 0, amount: 0, currency: 0 };
}

export const RouletteWager = {
  encode(message: RouletteWager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberGuessed !== 0) {
      writer.uint32(8).int32(message.numberGuessed);
    }
    if (message.amount !== 0) {
      writer.uint32(21).float(message.amount);
    }
    if (message.currency !== 0) {
      writer.uint32(24).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouletteWager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouletteWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberGuessed = reader.int32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.amount = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.currency = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RouletteWager {
    return {
      numberGuessed: isSet(object.numberGuessed) ? Number(object.numberGuessed) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? currencyFromJSON(object.currency) : 0,
    };
  },

  toJSON(message: RouletteWager): unknown {
    const obj: any = {};
    message.numberGuessed !== undefined && (obj.numberGuessed = Math.round(message.numberGuessed));
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = currencyToJSON(message.currency));
    return obj;
  },

  create<I extends Exact<DeepPartial<RouletteWager>, I>>(base?: I): RouletteWager {
    return RouletteWager.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RouletteWager>, I>>(object: I): RouletteWager {
    const message = createBaseRouletteWager();
    message.numberGuessed = object.numberGuessed ?? 0;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? 0;
    return message;
  },
};

function createBaseWager(): Wager {
  return { rockPaperScissors: undefined, diceWager: undefined, rouletteWager: undefined, demoFairCoinToss: undefined };
}

export const Wager = {
  encode(message: Wager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rockPaperScissors !== undefined) {
      RockPaperScissorsWager.encode(message.rockPaperScissors, writer.uint32(10).fork()).ldelim();
    }
    if (message.diceWager !== undefined) {
      DiceWager.encode(message.diceWager, writer.uint32(18).fork()).ldelim();
    }
    if (message.rouletteWager !== undefined) {
      RouletteWager.encode(message.rouletteWager, writer.uint32(26).fork()).ldelim();
    }
    if (message.demoFairCoinToss !== undefined) {
      DemoFairCoinToss.encode(message.demoFairCoinToss, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rockPaperScissors = RockPaperScissorsWager.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.diceWager = DiceWager.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rouletteWager = RouletteWager.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.demoFairCoinToss = DemoFairCoinToss.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Wager {
    return {
      rockPaperScissors: isSet(object.rockPaperScissors)
        ? RockPaperScissorsWager.fromJSON(object.rockPaperScissors)
        : undefined,
      diceWager: isSet(object.diceWager) ? DiceWager.fromJSON(object.diceWager) : undefined,
      rouletteWager: isSet(object.rouletteWager) ? RouletteWager.fromJSON(object.rouletteWager) : undefined,
      demoFairCoinToss: isSet(object.demoFairCoinToss) ? DemoFairCoinToss.fromJSON(object.demoFairCoinToss) : undefined,
    };
  },

  toJSON(message: Wager): unknown {
    const obj: any = {};
    message.rockPaperScissors !== undefined && (obj.rockPaperScissors = message.rockPaperScissors
      ? RockPaperScissorsWager.toJSON(message.rockPaperScissors)
      : undefined);
    message.diceWager !== undefined &&
      (obj.diceWager = message.diceWager ? DiceWager.toJSON(message.diceWager) : undefined);
    message.rouletteWager !== undefined &&
      (obj.rouletteWager = message.rouletteWager ? RouletteWager.toJSON(message.rouletteWager) : undefined);
    message.demoFairCoinToss !== undefined &&
      (obj.demoFairCoinToss = message.demoFairCoinToss ? DemoFairCoinToss.toJSON(message.demoFairCoinToss) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Wager>, I>>(base?: I): Wager {
    return Wager.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Wager>, I>>(object: I): Wager {
    const message = createBaseWager();
    message.rockPaperScissors = (object.rockPaperScissors !== undefined && object.rockPaperScissors !== null)
      ? RockPaperScissorsWager.fromPartial(object.rockPaperScissors)
      : undefined;
    message.diceWager = (object.diceWager !== undefined && object.diceWager !== null)
      ? DiceWager.fromPartial(object.diceWager)
      : undefined;
    message.rouletteWager = (object.rouletteWager !== undefined && object.rouletteWager !== null)
      ? RouletteWager.fromPartial(object.rouletteWager)
      : undefined;
    message.demoFairCoinToss = (object.demoFairCoinToss !== undefined && object.demoFairCoinToss !== null)
      ? DemoFairCoinToss.fromPartial(object.demoFairCoinToss)
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
