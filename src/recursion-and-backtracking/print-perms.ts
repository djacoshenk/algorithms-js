/*

Given an array A, print all permutations of size X.

Input: [1,2,3], X = 2
Output:[1, 2][1, 3][2, 1][2, 3][3, 1][3, 2]

Time Complexity: Factorial Complexity
Space Complexity:​ O(N), where N is A.length. We use O(N) space both in the buffer allocation

*/

export function printPerms(arr: number[], x: number) {
  if (arr.length === 0 || x > arr.length) {
    return;
  }

  let buffer = new Array(x);

  let isInBuffer = new Array(false);

  printPermsHelper(arr, buffer, 0, isInBuffer);
}

function printPermsHelper(
  arr: number[],
  buffer: number[],
  bufferIndex: number,
  isInBuffer: boolean[]
) {
  // termination cases - buffer full
  if (bufferIndex === buffer.length) {
    printArrayHelper(buffer);
    return;
  }

  // find candidates thaat go into current buffer index
  for (let i = 0; i < arr.length; i++) {
    if (!isInBuffer[i]) {
      // place candidate intno buffer index
      buffer[bufferIndex] = arr[i];
      isInBuffer[i] = true;
      // recurse to next buffer index
      printPermsHelper(arr, buffer, bufferIndex + 1, isInBuffer);
      isInBuffer[i] = false;
    }
  }
}

function printArrayHelper(buffer: number[]) {
  console.log(buffer);
}

printPerms([1, 2, 3], 2);
