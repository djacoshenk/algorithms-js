/*

Implement a function to calculate X^N. Both X and N can be positiveor negative. You can assume that overflow doesn't happen.

2^2 = 4 
2^-2 = 0.25
-2^3 = -8

Time Complexity: O(log(N))
Space Complexity: O(log(N)) on call stack

*/

export function calculatePower(x: number, power: number) {
  if (x === 0 && power <= 0) {
    return 0;
  }

  let result = positivePower(Math.abs(x), Math.abs(power));

  // handle negative power
  if (power < 0) {
    result = 1 / result;
  }

  // handle negative x
  if (x < 0 && power % 2 !== 0) {
    result = -1 * result;
  }

  return result;
}

function positivePower(x: number, power: number): number {
  // x^0 where x is not equal to 0
  if (power === 0) {
    return 1;
  }

  // x^1
  if (power === 1) {
    return x;
  }

  let halfPower = positivePower(x, power / 2);
  if (power % 2 === 0) {
    return halfPower * halfPower;
  } else {
    return x * halfPower * halfPower;
  }
}

console.log(calculatePower(-1, 1));
