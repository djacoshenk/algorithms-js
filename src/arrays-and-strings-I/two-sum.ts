/*

Given a sorted array of integers, find two numbers in the array that sum to a given integer target.

Input: ([1,2,3,5,6,7], 11)
Output: (5,6)

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function twoSumArr(arr: number[], target: number) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let sum = arr[i] + arr[j];

    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else if (sum === target) {
      return [arr[i], arr[j]];
    }
  }

  // if the arr does not pass any of the conditions, return null
  return null;
}

console.log(twoSumArr([1, 2, 3, 5, 6, 7], 11));
