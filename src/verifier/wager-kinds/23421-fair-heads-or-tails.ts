type Wager = {
  target: "heads" | "tails";
  amount: number;
  currency?: string;
};

export default {
  wagerKind: 23421,
  calculate: (wager: Wager, wagerHash: Uint8Array) => {
    const result = wagerHash[0] < 128 ? "heads" : "tails";
    let profit;

    if (result === wager.target) {
      profit = wager.amount;
    } else {
      profit = -wager.amount;
    }

    return { result, profit, currency: wager.currency ?? "" };
  },
};
