/*

Check if a String is a rotation of another.

For example: 
["canada", "dacana"] -> true
["canada", "canada"] -> true
["canada", "canary"] -> false
["dacana", "adacan"] -> true

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function isRotation(a: string, b: string) {
  if (a === null || b === null || a.length !== b.length) {
    return false;
  }

  const combineWords = a + a;

  return combineWords.includes(b);
}

console.log(isRotation('canada', 'dacana')); // true
console.log(isRotation('canada', 'canada')); // true
console.log(isRotation('canada', 'canary')); // false
console.log(isRotation('dacana', 'adacan')); // true
