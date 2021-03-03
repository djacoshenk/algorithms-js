/*

You are given an array of integers and a pivot. Rearrange the array in the following order:[all elements less than pivot, elements equal to pivot, elements greater than pivot].

Input: ([5,2,4,4,6,4,4,3], 4)
Output: [3,2,4,4,4,4,6,5]

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function dutchFlagArrPartition(arr: number[], pivot: number) {
  let i = 0;
  let j = arr.length - 1;
  let k = 0;

  while (k <= j) {
    if (arr[k] < pivot) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      i++;
      k++;
    } else if (arr[k] > pivot) {
      [arr[j], arr[k]] = [arr[k], arr[j]];
      j--;
    } else {
      k++;
    }
  }

  return arr;
}

console.log(dutchFlagArrPartition([5, 2, 4, 4, 6, 4, 4, 3], 4));
