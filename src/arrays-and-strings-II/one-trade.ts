/*

Given a list of stock prices for a company, find the maximum amount of money you can makewith one trade. A trade is a buy and sell.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function oneTrade(prices: number[]) {
  if (prices.length < 2) {
    return 0;
  }

  let minSoFar = Number.MAX_VALUE;
  let maxTrade = 0;

  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(minSoFar, prices[i]);
    maxTrade = Math.max(maxTrade, prices[i] - minSoFar);
  }

  return maxTrade;
}
