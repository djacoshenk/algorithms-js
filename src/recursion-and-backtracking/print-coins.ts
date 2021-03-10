/*

Given a set of coin denominations, print out the different ways you can make a target amount.
You can use as many coins of each denomination as you like.

For example: 
If coins are [1,2,5] and the target is 5, output will be:
[1,1,1,1,1]
[1,1,1,2]
[1,2,2]
[5]

*/

export function printCoins(coins: number[], target: number) {
  if (coins == null || target == null || target <= 0) {
    return;
  }

  let buffer: number[] = [];

  printCoinsHelper(coins, target, buffer, 0, 0);
}

function printCoinsHelper(
  coins: number[],
  target: number,
  buffer: number[],
  startIndex: number,
  sum: number
) {
  // termination case
  if (sum > target) {
    return;
  }

  // termination case
  if (sum === target) {
    printArrayHelper(buffer);
    return;
  }

  // find candidates that go into buffer
  for (let i = startIndex; i < coins.length; i++) {
    // place candidates into buffer
    buffer.push(coins[i]);

    // recurse
    printCoinsHelper(coins, target, buffer, i, sum + coins[i]);

    buffer.pop();
  }
}

function printArrayHelper(buffer: number[]) {
  console.log(buffer);
}

console.log(printCoins([1, 2, 5], 5));
