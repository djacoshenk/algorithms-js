/*

You are given an array of integers and a pivot. Rearrange the array in the following order:[all elements less than pivot, elements equal to pivot, elements greater than pivot].

Input: ([5,2,4,4,6,4,4,3], 4)
Output: [3,2,4,4,4,4,6,5]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function dutchFlagArrPartition(arr: number[], pivot: number) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] > pivot) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    } else if (arr[i] < pivot) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
    } else {
      i++;
    }
  }

  return arr;
}
