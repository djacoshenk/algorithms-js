/*

Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to a number X.

Input: [2, 4, -2, 1, -3, 5, -3], X = 5 
Output: [2, 4, -2, 1]

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function targetSumSubarray(arr: number[], target: number) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;
  let map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === target) {
      return arr.slice(0, i + 1);
    }

    if (map.has(sum - target)) {
      let j = map.get(sum - target)!;

      return arr.slice(j + 1, i + 1);
    }

    map.set(sum, i);
  }

  return null;
}

// [2, -1, 0, 3, 2, 1, -1];

// 0, 1, 2, 3, 4, 5, 6  i
// 2, 1, 1, 4, 6, 7, 6  sum
