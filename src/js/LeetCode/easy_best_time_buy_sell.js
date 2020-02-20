// https://github.com/azl397985856/leetcode/blob/master/problems/121.best-time-to-buy-and-sell-stock.md
/**
 * @param {number[]} prices
 * @return {number}
 */
// 遍历，如果股价是往上走的，就有可能出现最高值，这时候可以算一下profit比一比
// 如果股价是往下走的，就有可能出现最低值，这时候可以算一下min比一比
export const maxProfit = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = Math.max(profit, prices[i] - min);
    } else {
      min = Math.min(min, prices[i]);
    }
  }

  return profit;
};
// dp in day 0 is price - price = 0
// dp in day i = dp in day i-1 or price in day i - min
export const maxProfitDP = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  const dp = [0];
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return dp[prices.length - 1];
};

export const maxProfitGreedy = function(prices) {
  if (!prices || prices.length <= 1) {
    return 0;
  }

  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};
