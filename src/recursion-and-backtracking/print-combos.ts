/*

Given an array of integers, print all combinations of size X.

Time Complexity: Factorial Complexity
Space Complexity: O(X). We use O(X) space both in the buffer allocation and on the recursion stack.

*/

export function printCombos(arr: number[], x: number) {
  // if the array is empty or if size x is greater than the length of the provided array, return
  if (arr.length === 0 || x > arr.length) {
    return;
  }

  // initialize buffer to be an empty array of length x ---> x = 3, buffer = [ , , ]
  let buffer = new Array(x);

  printCombosHelper(arr, buffer, 0, 0);
}

function printCombosHelper(
  arr: number[],
  buffer: number[],
  startIndex: number,
  bufferIndex: number
) {
  // termination case - buffer full
  if (bufferIndex === buffer.length) {
    printArrayHelper(buffer);

    return;
  }

  // termination cases - startIndex reaches end of array
  if (startIndex === arr.length) {
    return;
  }

  // find candidates that go into current buffer index
  for (let i = startIndex; i < arr.length; i++) {
    // place item into buffer
    buffer[bufferIndex] = arr[i];

    // recurse to next buffer index
    printCombosHelper(arr, buffer, i + 1, bufferIndex + 1);
  }
}

function printArrayHelper(buffer: number[]) {
  console.log(buffer);
}
