/*

Given an array that is cyclically sorted, find the minimum element. A cyclically sorted array is a sorted array rotated by some number of elements. Assume all elementsare unique.

Input: [4,5,1,2,3]
Output: 2

Time Complexity: O(log(n))
Space Complexity: O(1)

*/

export function cyclicallySortedMin(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  let right = arr[arr.length - 1];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] <= right && (mid === 0 || arr[mid - 1] > arr[mid])) {
      return mid;
    } else if (arr[mid] > right) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(cyclicallySortedMin([4, 5, 1, 2, 3])); // 2
