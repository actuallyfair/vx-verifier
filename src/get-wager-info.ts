import { Wager, rockPaperScissorsWager_ChoiceToJSON } from "./wagers";
import { demoFairCoinToss_ChoiceToJSON } from "./wagers/demo-fair-coin-toss";

export type WagerInfo = {
  kindDisplayName: string; // What kind of wager
  displayName: string;
};

export function getWagerInfo(w: Wager): WagerInfo {
  if (w.demoFairCoinToss) {
    return {
      kindDisplayName: "Demo Fair Coin Toss",
      displayName: demoFairCoinToss_ChoiceToJSON(
        w.demoFairCoinToss.playerChoice
      ),
    };
  } else if (w.rockPaperScissors) {
    return {
      kindDisplayName: "Rock Paper Scissors",
      displayName: rockPaperScissorsWager_ChoiceToJSON(
        w.rockPaperScissors.playerChoice
      ),
    };
  } else if (w.diceWager) {
    return {
      kindDisplayName: "Dice",
      displayName: `> ${w.diceWager.numberToBeat}`,
    };
  } else if (w.rouletteWager) {
    return {
      kindDisplayName: "Roulette",
      displayName: `${w.rouletteWager.numberGuessed}`,
    };
  } else {
    return {
      kindDisplayName: "Unknown",
      displayName: "Unknown",
    };
  }
}
