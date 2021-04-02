/*

Given a string, find the longest substring with unique characters.

For example: "whatwhywhere" --> "atwhy"

Time Complexity: O(n)
Space Complexity: O(size of character set)​, which is typically a fixed number, so O(1)

*/

export function longestUniqueSubstring(str: string) {
  if (str.length === 0) {
    return null;
  }

  let map = new Map<string, number>();
  let start = 0;
  let end = 0;
  let longest = 1;

  map.set(str.charAt(0), 0);

  while (end < str.length - 1) {
    // expand end pointer
    end++;
    let toAdd = str.charAt(end);

    if (map.has(toAdd) && map.get(toAdd)! >= start) {
      start = map.get(toAdd)! + 1;
    }

    map.set(toAdd, end);

    // update result
    if (end - start + 1 > longest) {
      longest = end - start + 1;
    }
  }

  return str.slice(start, end + 1);
}
