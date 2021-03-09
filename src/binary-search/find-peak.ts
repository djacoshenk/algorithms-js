/*

A peak element in an array A is an A[i] where its neighboring elements are less than A[i].
So, A[i - 1] < A[i] and A[i + 1] < A[i].Assume there are no duplicates. Also, assume that A[-1] and A[length] are negative infinity (-∞).
So A[0] can be a peak if A[1] < A[0].

A = [1,3,4,5,2] => Peak = 5
A = [5,3,1] => Peak = 5
A = [1,3,5] => Peak = 5

*/

export function findPeak(arr: number[]) {
  if (arr == null || arr.length === 0) {
    return -1;
  }

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let left = mid > 0 ? arr[mid - 1] : -1;
    let right = mid < arr.length - 1 ? arr[mid + 1] : -1;

    if (left < arr[mid] && right > arr[mid]) {
      low = mid + 1;
    } else if (right < arr[mid] && left > arr[mid]) {
      high = mid - 1;
    } else if (right > arr[mid] && left > arr[mid]) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
