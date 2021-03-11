/*

Search array of unknown length. You are given an array, but you don't know the length. Write a program to finda target element in the array.

*/

export function findWithUnknownLength(arr: number[], target: number) {
  if (arr == null || arr.length === 0) {
    return -1;
  }

  let high = 1;
  let lastIndex = -1;
  let temp: number;

  while (true) {
    // try to access the array at index high, if out of bounds, an error will be caught in the catch block
    try {
      temp = arr[high];
    } catch (error) {
      lastIndex = binarySearchForLastIndex(arr, high / 2, high);
      break;
    }

    high *= 2;
  }

  return binarySearchOverRange(arr, target, 0, lastIndex);
}

function binarySearchForLastIndex(arr: number[], low: number, high: number) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let temp: number;

    try {
      temp = arr[mid];
    } catch (error) {
      high = mid - 1;
      continue;
    }

    try {
      temp = arr[mid + 1];
    } catch (error) {
      return mid;
    }

    low = mid + 1;
  }

  return -1;
}

function binarySearchOverRange(
  arr: number[],
  target: number,
  low: number,
  high: number
) {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
