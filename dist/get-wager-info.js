"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWagerInfo = void 0;
const wager_1 = require("./generated/wager");
const demo_fair_coin_toss_1 = require("./generated/wagers/demo-fair-coin-toss");
function getWagerInfo(w) {
    if (w.demoFairCoinToss) {
        return {
            kindDisplayName: "Demo Fair Coin Toss",
            displayName: (0, demo_fair_coin_toss_1.demoFairCoinToss_ChoiceToJSON)(w.demoFairCoinToss.playerChoice),
            playerStakes: new Map([]),
        };
    }
    else if (w.rockPaperScissors) {
        return {
            kindDisplayName: "Rock Paper Scissors",
            displayName: (0, wager_1.rockPaperScissorsWager_ChoiceToJSON)(w.rockPaperScissors.playerChoice),
            playerStakes: new Map([]),
        };
    }
    else if (w.diceWager) {
        return {
            kindDisplayName: "Dice",
            displayName: `> ${w.diceWager.numberToBeat}`,
            playerStakes: new Map([]),
        };
    }
    else if (w.rouletteWager) {
        return {
            kindDisplayName: "Roulette",
            displayName: `${w.rouletteWager.numberGuessed}`,
            playerStakes: new Map([]),
        };
    }
    else {
        return {
            kindDisplayName: "Unknown",
            displayName: "Unknown",
            playerStakes: new Map([]),
        };
    }
}
exports.getWagerInfo = getWagerInfo;
