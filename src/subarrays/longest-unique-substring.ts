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

  let sub = str[0];
  let longest = str[0];

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    const index = sub.indexOf(char);

    if (index === -1) {
      sub += char;
    } else {
      sub = sub.slice(index + 1) + char;
    }

    if (sub.length > longest.length) {
      longest = sub;
    }
  }

  return longest;
}
