/*

Given an array of integers, find the shortest sub array, that if sorted, results in the entire array being sorted.

Input: [1,3,5,2,6,4,7,8,9]
Output: [3,5,2,6,4]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function shortestUnsortedSubArr(arr: number[]) {
  if (arr == null || arr.length == 0) {
    return null;
  }

  let i = 0;
  let j = arr.length - 1;

  // find dip
  while (i < j) {
    if (arr[i] > arr[i + 1]) {
      break;
    }

    i++;
  }

  // no dip found, array is already sorted
  if (i === j) {
    return null;
  }

  // find bump
  while (j > 0) {
    if (arr[j] < arr[j - 1]) {
      break;
    }

    j--;
  }

  // find min and max of arr[start..end]
  let k = i;
  let min = arr[k];
  let max = arr[k];

  while (k <= j) {
    if (arr[k] > max) {
      max = arr[k];
    }

    if (arr[k] < min) {
      min = arr[k];
    }

    k++;
  }

  // expand start and end outward
  while (i > 0 && arr[i - 1] > min) {
    i--;
  }

  while (j < arr.length - 1 && arr[j + 1] < max) {
    j++;
  }

  return arr.slice(i, j + 1);
}

console.log(shortestUnsortedSubArr([1, 3, 5, 2, 6, 4, 7, 8, 9]));
