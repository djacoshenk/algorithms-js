/*

Find the nth number in the Fibonacci series.

*/

function fibonacci(n: number): number {
  // handle base case
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
