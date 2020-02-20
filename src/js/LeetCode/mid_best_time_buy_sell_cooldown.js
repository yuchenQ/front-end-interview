// https://sophiesongge.github.io/leetcode/2017/02/15/buy-sell-stock.html
/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n)
export const maxProfit = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  const buy = [-prices[0], Math.max(-prices[0], -prices[1])];
  const sell = [0, Math.max(0, prices[1] - prices[0])];

  for (let i = 2; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]);

    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }

  return sell[prices.length - 1];
};

// O(1)
export const maxProfitBestDP = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  let buy = -prices[0];
  let thisSell = 0;
  let lastTwoSell = 0;

  for (let i = 1; i < prices.length; i++) {
    const lastBuy = buy;
    const lastSell = thisSell;

    buy = Math.max(buy, lastTwoSell - prices[i]);

    thisSell = Math.max(lastSell, lastBuy + prices[i]);

    lastTwoSell = lastSell;
  }

  return thisSell;
};
