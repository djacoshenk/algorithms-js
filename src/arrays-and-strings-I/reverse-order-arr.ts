/*

Given an array, reverse the order of its elements.

Input: [3,5,2,5,2,3,9]
Output: [9,3,2,5,2,5,3]

Time Complexity: O(n) aka linear time
Space Complexity: O(1) aka constant space

*/

export function reverseOrderArr(arr: number[]) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

console.log(reverseOrderArr([3, 5, 2, 5, 2, 3, 9]));
