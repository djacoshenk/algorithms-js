/*

Given an array of integers that can be both +ve and -ve, find the contiguous subarray with the largest sum.

Input: [1, 2, -1, 2, -3, 2, -5]
Output: [1, 2, -1, 2]

*/

export function maxSubarray(arr: number[]): number[] | null {
  if (arr.length === 0) {
    return arr;
  }

  let maxEndingHere = arr[0];
  let maxSum = arr[0];
  let end = 0;

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);

    if (maxEndingHere > maxSum) {
      end = i;
      maxSum = maxEndingHere;
    }
  }

  let sum = 0;

  for (let i = end; i >= 0; i--) {
    sum += arr[i];

    if (sum === maxSum) {
      return arr.slice(i, end + 1);
    }
  }

  return null;
}

// [1, 2, -1, 2, -3, 2, -5]
//  1  3   2  4   1  3  -2  maxEndingHere
//  1  3   3  4   4  4   4  maxSum
//            ^
//           end
