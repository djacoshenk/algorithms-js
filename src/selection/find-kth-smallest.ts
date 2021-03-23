/*

Find the Kth smallest element in a given array of integers.

For example:
If A => [5,7,4,6,5,3,3] and K => 3, the result will be 4.

This is also known as the Kth order statistic of the array.

Time Complexity:​ O(n) average case, O(n​2​) worst case
Space Complexity:​ O(log(n)) average case, O(n) worse case. Space is used on the recursion stack

*/

export function findKthElement(arr: number[], k: number) {
  if (arr.length === 0 || k < 1 || k > arr.length) {
    return -1;
  }

  return findKthElementHelper(arr, 0, arr.length - 1, k - 1); // returns value of Kth smallest, not index
}

function findKthElementHelper(
  arr: number[],
  start: number,
  end: number,
  targetIndex: number
): number {
  let pivotIndex = getRandomHelper(start, end); // return random index within array bounds
  let result = partitionHelper(arr, start, end, pivotIndex); // return index where pivot is located

  if (result > targetIndex) {
    return findKthElementHelper(arr, start, result - 1, targetIndex); // recurse lower half of array
  } else if (result < targetIndex) {
    return findKthElementHelper(arr, result + 1, end, targetIndex); // recurse upper half of array
  } else {
    return arr[result];
  }
}

function getRandomHelper(start: number, end: number) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function partitionHelper(
  arr: number[],
  start: number,
  end: number,
  pivotIndex: number
) {
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]; // place pivot at the start of the array

  let less = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= arr[start]) {
      less++;

      [arr[i], arr[less]] = [arr[less], arr[i]];
    }
  }

  [arr[start], arr[less]] = [arr[less], arr[start]];

  return less;
}
