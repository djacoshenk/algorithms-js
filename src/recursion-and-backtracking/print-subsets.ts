/*

Given an array of integers A, print all its subsets.

Input:​ [1, 2, 3]
Output:[][1][2][3][1, 2][1, 3][2, 3][1, 2, 3]

Time Complexity: Factorial Complexity
Space Complexity: ​O(N), where N is A's length. We use O(N) space both in the buffer allocation and on the recursion stack.

*/

export function printSubsets(arr: number[]) {
  if (arr.length === 0) {
    return;
  }

  let buffer = new Array(arr.length);

  printSubsetsHelper(arr, buffer, 0, 0);
}

function printSubsetsHelper(
  arr: number[],
  buffer: number[],
  startIndex: number,
  bufferIndex: number
) {
  printArrayHelper(buffer, bufferIndex);

  // termination cases - buffer full
  if (bufferIndex === buffer.length) {
    return;
  }

  if (startIndex === arr.length) {
    return;
  }

  // find candidates that go into current buffer index
  for (let i = startIndex; i < arr.length; i++) {
    // place item into buffer
    buffer[bufferIndex] = arr[i];

    // recurse to next buffer index
    printSubsetsHelper(arr, buffer, i + 1, bufferIndex + 1);
  }
}

function printArrayHelper(buffer: number[], bufferIndex: number) {
  console.log(buffer.slice(0, bufferIndex));
}

printSubsets([1, 2, 3]);
