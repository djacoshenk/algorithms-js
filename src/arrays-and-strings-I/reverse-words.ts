/*

Given a sentence, reverse the words of the sentence.

Input: 'I live in a house'
Output: 'house a in live i'

Time Complexity: O(n)
Space Complexity: O(n)

*/

export function reverseWords(str: string) {
  let i = str.length - 1;
  let j = str.length;
  let reversedStr = '';

  while (i >= 0) {
    // if a space is encountered, take the substring and add to the reversed string
    if (str[i] === ' ') {
      reversedStr += str.substring(i + 1, j) + ' ';
      j = i;
    }

    // add the last word substring to the reversed string
    if (i === 0) {
      reversedStr += str.substring(i, j);
    }

    i--;
  }

  return reversedStr;
}
