/*

You are given a sorted array A and a target T. Return the index where it would be placed if inserted in order.

Input: A = [1,2,4,4,5,6,8], Target = 3
Output: 2

Input: A = [1,2,4,4,5,6,8], Target = 0
Output: 0

Input: A = [1,2,4,4,5,6,8], Target = 4
Output: 4

Time Complexity: O(log(n))
Space Complexity: O(1)

*/

export function findIndexSorted(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] <= target) {
      // if mid is equal to the last index, return the array length (index beyond the last)
      if (mid === arr.length - 1) {
        return arr.length;
      }

      start = mid + 1;
    } else {
      // if mid is equal to the first index (0) or if the index before is less than or equal to mid, return mid
      if (mid === 0 || arr[mid - 1] <= target) {
        return mid;
      }

      end = mid - 1;
    }
  }

  return -1;
}
