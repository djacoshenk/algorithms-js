/*

Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.

Input: [2, 4, -2, 1, -3, 5, -3]
Output: [4, -2, 1, -3]

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function zeroSumSubarray(arr: number[]) {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;
  let map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      return arr.slice(0, i + 1);
    }

    if (map.has(sum)) {
      let j = map.get(sum)!;

      return arr.slice(j + 1, i + 1);
    }

    map.set(sum, i);
  }

  return null;
}
