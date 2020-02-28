// https://github.com/azl397985856/leetcode/blob/master/problems/122.best-time-to-buy-and-sell-stock-ii.md
// 122. Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

export const maxProfitDP = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  const dp = [0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      dp[i] = dp[i - 1] + (prices[i] - prices[i - 1]);
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[prices.length - 1];
};

export const maxProfitGreedy = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, profit + prices[i] - prices[i - 1]);
  }

  return profit;
};
