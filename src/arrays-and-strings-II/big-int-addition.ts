/*

You are given two arrays that represent BigIntegers. In such an array, each element in the array is a single digit number.

For example:      
a = [1,6,4,3]      (1643)      
b = [1,3,1]        (131)
Sum = [1,7,7,4]    (1774)

Time Complexity:​ O(n), where n is the length of the larger input array
Space Complexity:​ O(n), because we allocate an array to store the result

[1,6,4,3]
  [1,3,1]

*/

export function bigIntAddition(a: number[], b: number[]): number[] {
  let larger = a.length > b.length ? a : b;
  let smaller = a === larger ? b : a;
  smaller = padSmallerWithZeroes(smaller, larger.length);
  let result = Array(larger.length + 1).fill(0);
  let carry = 0;

  for (let i = larger.length - 1; i >= 0; i--) {
    let sum = larger[i] + smaller[i] + carry;
    carry = Math.floor(sum / 10);
    result[i + 1] = sum % 10;
  }

  result[0] = carry;

  return result[0] === 0 ? result.slice(1, result.length) : result;
}

function padSmallerWithZeroes(smaller: number[], length: number): number[] {
  let result = Array(length).fill(0);
  let resultIndex = result.length - 1;
  let smallerIndex = smaller.length - 1;

  while (smallerIndex >= 0) {
    result[resultIndex] = smaller[smallerIndex];
    resultIndex--;
    smallerIndex--;
  }

  return result;
}
