/*

An image is nothing but a matrix of pixels. Rotate a square imageby 90 degrees, given an array of pixels as integers. 

For example:
1 2 3           7 4 1 
4 5 6   --->    8 5 2
7 8 9           9 6 3

Time Complexity: O(n), where n is the total elements in 2D array
Space Complexity: O(1)

*/

function performMove(
  arr: number[][],
  r1: number,
  c1: number,
  r2: number,
  c2: number,
  offset: number
) {
  let temp = arr[r1][c1 + offset];
  arr[r1][c1 + offset] = arr[r2 - offset][c1];
  arr[r2 - offset][c1] = arr[r2][c2 - offset];
  arr[r2][c2 - offset] = arr[r1 + offset][c2];
  arr[r1 + offset][c2] = temp;
}

export function rotateMatrixBy90(arr: number[][]) {
  if (arr.length === 0 || arr.length !== arr[0].length) {
    return arr;
  }

  let size = arr.length;

  for (let i = 0; i < arr.length / 2; i++) {
    let r1 = i;
    let c1 = i;
    let r2 = r1 + size - 1;
    let c2 = c1 + size - 1;

    for (let j = 1; j <= size - 1; j++) {
      performMove(arr, r1, c1, r2, c2, j);
    }

    return arr;
  }
}
