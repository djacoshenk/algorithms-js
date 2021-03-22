/*

Find the nth number in the Fibonacci series.

*/

function fibonacciMemoization(n: number) {
  return fibonacciMemoizationHelper(n, new Map());
}

function fibonacciMemoizationHelper(
  n: number,
  memo: Map<number, number>
): number {
  // handle base case
  if (n === 1 || n === 2) {
    return 1;
  }

  // check if the Map already contains the result of n, if so, return the result of n
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  // calculate the result and set in the Map as a value with key n
  let result =
    fibonacciMemoizationHelper(n - 1, memo) +
    fibonacciMemoizationHelper(n - 2, memo);
  memo.set(n, result);
  return result;
}
