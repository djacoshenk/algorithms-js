/*

Given an array of integers, rearrange the elements such that all zeros are moved to the end of the array.

Input: [4,2,0,1,0,3,0]
Output: [4,1,2,3,0,0,0]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function moveZeroesEnd(arr: number[]) {
  let i = arr.length - 1;
  let j = arr.length - 1;

  while (j >= 0) {
    if (arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i--;
    }

    j--;
  }

  return arr;
}
