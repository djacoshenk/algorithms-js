/*

Given an array of numbers, replace each even number with two of the same number.

Input:  [1,2,5,6,8,-1,-1,-1] 
Output: [1,2,2,5,6,6,8,8]

Time Complexity: O(n) aka linear time
Space Complexity: O(1) aka constant space

*/

export function replaceEvensDoubles(arr: number[]) {
  let i = findLastNumber(arr);
  let j = arr.length - 1;

  while (i >= 0) {
    // if the number is even, move to the end and advance the end pointer (twice)
    if (arr[i] % 2 === 0) {
      arr[j] = arr[i];
      j--;
      arr[j] = arr[i];
      j--;
      // if the number is odd, move to the end and advance the end pointer (once)
    } else {
      arr[j] = arr[i];
      j--;
    }

    // we always want to advance the start pointer for the next iteration
    i--;
  }

  return arr;
}

// helper function to find the last index which does not contain -1
function findLastNumber(arr: number[]) {
  let i = arr.length - 1;

  while (i >= 0 && arr[i] === -1) {
    i--;
  }

  return i;
}

console.log(replaceEvensDoubles([1, 2, 5, 6, 8, -1, -1, -1]));
