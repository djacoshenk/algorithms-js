/*

Given an array, reverse the order of its elements.

Input: [3,5,2,5,2,3,9]
Output: [9,3,2,5,2,5,3]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function reverseOrderArr(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // swap elements and move pointers inward
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

console.log(reverseOrderArr([3, 5, 2, 5, 2, 3, 9]));
