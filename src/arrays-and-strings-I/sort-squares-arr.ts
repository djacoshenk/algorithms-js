/*

Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. 

Input: [-4,-2,-1,0,3,5]
Output: [0,1,4,9,16,25]

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function sortSquaresArr(arr: number[]) {
  let i = 0;
  let j = arr.length - 1;

  // allocate a new array and track its index
  let result = new Array(arr.length);
  let resultIndex = result.length - 1;

  while (i <= j) {
    if (Math.abs(arr[i]) > Math.abs(arr[j])) {
      result[resultIndex] = Math.pow(arr[i], 2);
      i++;
    } else {
      result[resultIndex] = Math.pow(arr[j], 2);
      j--;
    }

    resultIndex--;
  }

  return result;
}

console.log(sortSquaresArr([-4, -2, -1, 0, 3, 5]));
