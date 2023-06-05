import { Wager } from "./wagers";

export function getWagerDisplayName(w: Wager) {
  if (w.demoFairCoinToss) {
    return "Coin Flip";
  } else if (w.rockPaperScissors) {
    return "Rock Paper Scissors";
  } else if (w.diceWager) {
    return "Dice";
  } else if (w.rouletteWager) {
    return "Roulette";
  } else {
    return "Unknown";
  }
}
