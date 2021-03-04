/*

Given a sorted array of Integers, find the target. If the target is not found,return the element closest to the target.

Input: [1,2,4,5,7,8,9] and Target = 6
Output: 3 or 4 

Time Complexity: O(log(n))
Space Complexity: O(1)

*/

export function findClosestElement(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    result = record(arr, mid, result, target);

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return result;
}

function record(arr: number[], mid: number, result: number, target: number) {
  // if the result is -1 or the diff between arr[mid] and target is less than the diff between arr[result] and target, then it is closer, so return mid
  if (
    result === -1 ||
    Math.abs(arr[mid] - target) < Math.abs(arr[result] - target)
  ) {
    return mid;
  }

  // if the diff between arr[mid] and target is greater than the diff between arr[result] and target, then it is further away, so return the prev result
  return result;
}

console.log(findClosestElement([1, 2, 4, 5, 7, 8, 9], 6)); // 3
