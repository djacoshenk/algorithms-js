/*

Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. 

Input: [-4,-2,-1,0,3,5]
Output: [0,1,4,9,16,25]

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function sortSquaresArr(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  // allocate a new array and track its index
  let result = new Array(arr.length);
  let resultIndex = result.length - 1;

  while (start <= end) {
    if (Math.abs(arr[start]) > Math.abs(arr[end])) {
      result[resultIndex] = Math.pow(arr[start], 2);
      start++;
    } else {
      result[resultIndex] = Math.pow(arr[end], 2);
      end--;
    }

    resultIndex--;
  }

  return result;
}

console.log(sortSquaresArr([-4, -2, -1, 0, 3, 5]));
