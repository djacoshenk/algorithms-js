/*

Given a sorted array of integers, find two numbers in the array that sum to a given integer target.

Input: ([1,2,3,5,6,7], 11)
Output: (5,6)

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function twoSumArr(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // calculate the sum of the two elements
    let sum = arr[start] + arr[end];

    if (sum < target) {
      start++;
    } else if (sum > target) {
      end--;
    } else if (sum === target) {
      return [arr[start], arr[end]];
    }
  }

  // if the arr does not pass any of the conditions, return null
  return null;
}

console.log(twoSumArr([1, 2, 3, 5, 6, 7], 11));
