/*

Given an array of integers, find the shortest sub array, that if sorted, results in the entire array being sorted.

Input: [1,3,5,2,6,4,7,8,9]
Output: [3,5,2,6,4]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function shortestUnsortedSubArr(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  // find dip
  while (start < end) {
    if (arr[start] > arr[start + 1]) {
      break;
    }

    start++;
  }

  // no dip found, array is already sorted
  if (start === end) {
    return null;
  }

  // find bump
  while (end > 0) {
    if (arr[end] < arr[end - 1]) {
      break;
    }

    end--;
  }

  // find min and max of arr[start..end]
  let sub = start;
  let min = arr[sub];
  let max = arr[sub];

  while (sub <= end) {
    if (arr[sub] > max) {
      max = arr[sub];
    }

    if (arr[sub] < min) {
      min = arr[sub];
    }

    sub++;
  }

  // expand start and end outward
  while (start > 0 && arr[start - 1] > min) {
    start--;
  }

  while (end < arr.length - 1 && arr[end + 1] < max) {
    end++;
  }

  return arr.slice(start, end + 1);
}

console.log(shortestUnsortedSubArr([1, 3, 5, 2, 6, 4, 7, 8, 9])); // [3, 5, 2, 6, 4]
