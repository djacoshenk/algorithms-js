/*

Given a sorted array that can contain duplicates, find the first occurrence of the target element. 

Input: [1,3,4,6,6,6,7] and Target = 6
Output: 3

Time Complexity: O(log(n))
Space Complexity: O(1)

*/

export function findFirstOccurrence(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] === target && mid > 0 && arr[mid - 1] === target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
