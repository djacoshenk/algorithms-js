/*

Merge Sort

Time Complexity: O(nlog(n))
Space Complexity: O(n)

*/

export function mergeSort(arr: number[]) {
  if (arr.length === 0) {
    return arr;
  }

  mergeSortHelper(arr, 0, arr.length - 1);

  return arr;
}

function mergeSortHelper(arr: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  let mid = Math.floor(start + (end - start) / 2);

  mergeSortHelper(arr, start, mid);
  mergeSortHelper(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr: number[], start: number, mid: number, end: number) {
  let result: number[] = [];

  let i = start;
  let j = mid + 1;
  let resultPos = 0;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      result[resultPos] = arr[i];

      resultPos++;
      i++;
    } else {
      result[resultPos] = arr[j];

      resultPos++;
      j++;
    }
  }

  while (i <= mid) {
    result[resultPos] = arr[i];

    resultPos++;
    i++;
  }

  while (j <= end) {
    result[resultPos] = arr[j];

    resultPos++;
    j++;
  }

  for (let k = 0; k < result.length; k++) {
    arr[start + k] = result[k];
  }
}
