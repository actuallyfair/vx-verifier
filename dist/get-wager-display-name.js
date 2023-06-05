"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWagerDisplayName = void 0;
function getWagerDisplayName(w) {
    if (w.demoFairCoinToss) {
        return "Coin Flip";
    }
    else if (w.rockPaperScissors) {
        return "Rock Paper Scissors";
    }
    else if (w.diceWager) {
        return "Dice";
    }
    else if (w.rouletteWager) {
        return "Roulette";
    }
    else {
        return "Unknown";
    }
}
exports.getWagerDisplayName = getWagerDisplayName;
