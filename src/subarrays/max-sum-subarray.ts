/*

Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.

Input: [1, 2, -1, 2, -3, 2, -5]
Output: 4

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function maxSumSubarray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let maxEndingHere = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    maxSum = Math.max(maxSum, maxEndingHere);
  }

  return maxSum;
}

// [1, 2, -1, 2, -3, 2, -5]
//  1  3   2  4   1  3  -2  maxEndingHere
//  1  3   3  4   4  4   4  maxSum
