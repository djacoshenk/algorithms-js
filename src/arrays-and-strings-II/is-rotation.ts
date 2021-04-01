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
  if (a.length !== b.length) {
    return false;
  }

  const combineWords = a + a;

  return combineWords.includes(b);
}
