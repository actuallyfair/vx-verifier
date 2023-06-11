"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContext = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const fair_coin_toss_1 = require("./message-contexts/fair-coin-toss");
const hilo_1 = require("./message-contexts/hilo");
const vhemp_crash_1 = require("./message-contexts/vhemp-crash");
function createBaseMessageContext() {
    return { fairCoinToss: undefined, vhempCrash: undefined, hilo: undefined };
}
exports.MessageContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fairCoinToss !== undefined) {
            fair_coin_toss_1.FairCoinToss.encode(message.fairCoinToss, writer.uint32(10).fork()).ldelim();
        }
        if (message.vhempCrash !== undefined) {
            vhemp_crash_1.VHEMPCrash.encode(message.vhempCrash, writer.uint32(18).fork()).ldelim();
        }
        if (message.hilo !== undefined) {
            hilo_1.HiLo.encode(message.hilo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fairCoinToss = fair_coin_toss_1.FairCoinToss.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.vhempCrash = vhemp_crash_1.VHEMPCrash.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hilo = hilo_1.HiLo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fairCoinToss: isSet(object.fairCoinToss) ? fair_coin_toss_1.FairCoinToss.fromJSON(object.fairCoinToss) : undefined,
            vhempCrash: isSet(object.vhempCrash) ? vhemp_crash_1.VHEMPCrash.fromJSON(object.vhempCrash) : undefined,
            hilo: isSet(object.hilo) ? hilo_1.HiLo.fromJSON(object.hilo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fairCoinToss !== undefined &&
            (obj.fairCoinToss = message.fairCoinToss ? fair_coin_toss_1.FairCoinToss.toJSON(message.fairCoinToss) : undefined);
        message.vhempCrash !== undefined &&
            (obj.vhempCrash = message.vhempCrash ? vhemp_crash_1.VHEMPCrash.toJSON(message.vhempCrash) : undefined);
        message.hilo !== undefined && (obj.hilo = message.hilo ? hilo_1.HiLo.toJSON(message.hilo) : undefined);
        return obj;
    },
    create(base) {
        return exports.MessageContext.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageContext();
        message.fairCoinToss = (object.fairCoinToss !== undefined && object.fairCoinToss !== null)
            ? fair_coin_toss_1.FairCoinToss.fromPartial(object.fairCoinToss)
            : undefined;
        message.vhempCrash = (object.vhempCrash !== undefined && object.vhempCrash !== null)
            ? vhemp_crash_1.VHEMPCrash.fromPartial(object.vhempCrash)
            : undefined;
        message.hilo = (object.hilo !== undefined && object.hilo !== null) ? hilo_1.HiLo.fromPartial(object.hilo) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
