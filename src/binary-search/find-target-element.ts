/*

Given a sorted array, search for a target item.

Input: [1,2,4,7,8,9]
Output: 1

Time Complexity:​ O(log(n))
Space Complexity:​ O(1)

*/

export function findTargetElement(arr: number[], target: number) {
  if (arr == null || target == null) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(findTargetElement([1, 2, 4, 7, 8, 9], 2)); // 1
