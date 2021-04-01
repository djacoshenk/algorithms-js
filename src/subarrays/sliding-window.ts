/*

Given an array of positive integers, find a subarray that sums to a given number X.

Input: [1, 2, 3, 5, 2] and Target = 8
Output: [3, 5]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function slidingWindow(arr: number[], target: number) {
  if (arr.length === 0) {
    return null;
  }

  let start = 0;
  let end = 0;
  let sum = arr[0];

  while (start < arr.length) {
    if (start > end) {
      end = start;
      sum = arr[start];
    }

    if (sum < target) {
      // expand to the right
      if (end === arr.length - 1) {
        break; // reach end, cannot expand further
      }

      end++;
      sum += arr[end];
    } else if (sum > target) {
      // contract from the left
      sum -= arr[start];
      start++;
    } else {
      return arr.slice(start, end + 1);
    }
  }

  return null;
}
