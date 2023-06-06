import { Amount } from "./amount";
import { Wager, rockPaperScissorsWager_ChoiceToJSON } from "./generated/wager";
import { demoFairCoinToss_ChoiceToJSON } from "./generated/wagers/demo-fair-coin-toss";
import { Currency } from "./generated/currency";

export type WagerInfo = {
  kindDisplayName: string; // What kind of wager
  displayName: string;
  playerStakes: Map<Currency, number>;
};

export function getWagerInfo(w: Wager): WagerInfo {
  if (w.demoFairCoinToss) {
    return {
      kindDisplayName: "Demo Fair Coin Toss",
      displayName: demoFairCoinToss_ChoiceToJSON(
        w.demoFairCoinToss.playerChoice
      ),
      playerStakes: new Map([[Currency.CURRENCY_UNSPECIFIED, 1]]),
    };
  } else if (w.rockPaperScissors) {
    return {
      kindDisplayName: "Rock Paper Scissors",
      displayName: rockPaperScissorsWager_ChoiceToJSON(
        w.rockPaperScissors.playerChoice
      ),
      playerStakes: new Map([]),
    };
  } else if (w.diceWager) {
    return {
      kindDisplayName: "Dice",
      displayName: `> ${w.diceWager.numberToBeat}`,
      playerStakes: new Map([[Currency.CURRENCY_UNSPECIFIED, 1]]),
    };
  } else if (w.rouletteWager) {
    return {
      kindDisplayName: "Roulette",
      displayName: `${w.rouletteWager.numberGuessed}`,
      playerStakes: new Map([
        [w.rouletteWager.currency, w.rouletteWager.amount],
      ]),
    };
  } else {
    return {
      kindDisplayName: "Unknown",
      displayName: "Unknown",
      playerStakes: new Map([]),
    };
  }
}
