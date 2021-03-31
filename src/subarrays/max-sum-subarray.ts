/*

Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.

Input: [1, 2, -1, 2, -3, 2, -5]
Output: 4

*/

export function maxSumSubarray(arr: number[]) {
  if (arr.length === 0) {
    return arr;
  }

  let maxSum = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    maxSum = Math.max(maxSum, maxEndingHere);
  }

  return maxSum;
}
