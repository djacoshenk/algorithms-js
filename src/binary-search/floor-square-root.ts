/*

Find the square root of an integer X. For example, squareRoot(4) = 2.
If X is not a perfect square, find the integer floor of the square root.
For example, squareRoot(5) & squareRoot(8) will return 2. squareRoot(9) will return 3.

Time Complexity: O(log(X))
Space Complexity: O(1)

*/

export function floorSquareRoot(x: number) {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  let low = 0;
  let high = x / 2;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (square(mid) > x) {
      high = mid - 1;
    } else if (square(mid) < x) {
      if (square(mid + 1) > x) {
        return mid;
      }

      low = mid + 1;
    } else {
      return mid;
    }
  }
}

function square(x: number) {
  return x * x;
}
