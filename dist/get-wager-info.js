"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWagerInfo = void 0;
const wagers_1 = require("./wagers");
const demo_fair_coin_toss_1 = require("./wagers/demo-fair-coin-toss");
function getWagerInfo(w) {
    if (w.demoFairCoinToss) {
        return {
            kindDisplayName: "Demo Fair Coin Toss",
            displayName: (0, demo_fair_coin_toss_1.demoFairCoinToss_ChoiceToJSON)(w.demoFairCoinToss.playerChoice),
        };
    }
    else if (w.rockPaperScissors) {
        return {
            kindDisplayName: "Rock Paper Scissors",
            displayName: (0, wagers_1.rockPaperScissorsWager_ChoiceToJSON)(w.rockPaperScissors.playerChoice),
        };
    }
    else if (w.diceWager) {
        return {
            kindDisplayName: "Dice",
            displayName: `> ${w.diceWager.numberToBeat}`,
        };
    }
    else if (w.rouletteWager) {
        return {
            kindDisplayName: "Roulette",
            displayName: `${w.rouletteWager.numberGuessed}`,
        };
    }
    else {
        return {
            kindDisplayName: "Unknown",
            displayName: "Unknown",
        };
    }
}
exports.getWagerInfo = getWagerInfo;
