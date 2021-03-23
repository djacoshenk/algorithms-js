/*

Quick Sort

*/

export function quickSort(arr: number[]) {
  if (arr.length === 0) {
    return arr;
  }

  quickSortHelper(arr, 0, arr.length - 1);

  return arr;
}

function quickSortHelper(arr: number[], start: number, end: number) {
  if (start < 0 || end >= arr.length || start >= end) {
    return;
  }

  let pivot = Math.floor(start + (end - start) / 2);
  let points = dutchFlagArrPartition(arr, start, end, pivot);

  quickSortHelper(arr, start, points[0]);
  quickSortHelper(arr, points[1], end);
}

function dutchFlagArrPartition(
  arr: number[],
  start: number,
  end: number,
  pivotIndex: number
) {
  let pivot = arr[pivotIndex];
  let low = start - 1;
  let mid = start - 1;
  let high = end + 1;

  while (mid + 1 < high) {
    if (arr[mid + 1] > pivot) {
      [arr[high - 1], arr[mid + 1]] = [arr[mid + 1], arr[high - 1]];
      high--;
    } else if (arr[mid + 1] === pivot) {
      mid++;
    } else {
      [arr[mid + 1], arr[low + 1]] = [arr[low + 1], arr[mid + 1]];
      mid++;
      low++;
    }
  }

  return [low, high];
}
