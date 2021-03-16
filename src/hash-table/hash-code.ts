/*

Generate a good hash function for a String.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function hashCode(str: string) {
  let hash = 0;
  let x = 53;

  for (let i = 0; i < str.length; i++) {
    hash = hash * x + str.charCodeAt(i);
  }

  return hash;
}
