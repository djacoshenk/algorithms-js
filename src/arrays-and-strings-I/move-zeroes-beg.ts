/*

You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.

Input: [ 4, 2, 0, 1, 0, 3, 0]
Output: [ 0, 0, 0, 1, 2, 3, 4]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function moveZeroesBeg(arr: number[]) {
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }

    j++;
  }

  return arr;
}
