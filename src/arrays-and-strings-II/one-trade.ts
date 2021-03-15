/*

Given a list of stock prices for a company, find the maximum amount of money you can makewith one trade. A trade is a buy and sell.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function oneTrade(prices: number[]) {
  if (prices === null || prices.length < 2) {
    return 0;
  }

  let minSoFar = Number.MAX_VALUE;
  let maxTrade = 0;

  for (let i = 0; i < prices.length; i++) {
    minSoFar = Math.min(minSoFar, prices[i]);
    let tradeDiff = prices[i] - minSoFar;

    if (tradeDiff > maxTrade) {
      maxTrade = tradeDiff;
    }
  }

  return maxTrade;
}

console.log(oneTrade([5, 10, 7, 2, 6, 4, 7, 8, 5])); // 6
console.log(oneTrade([5])); // 0
console.log(oneTrade([5, 10])); // 5
