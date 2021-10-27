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
    const char = str[i]; // current char of the string we're inspecting
    const index = sub.indexOf(char); // check if our unique substr contains the char (-1 means the char is unique)

    if (index === -1) {
      sub += char; // if char is unique to the substr, add it
    } else {
      sub = sub.slice(index + 1) + char; // if the char is not unique, slice from the next letter and add the char
    }

    if (sub.length > longest.length) {
      longest = sub;
    }
  }

  return longest;
}
