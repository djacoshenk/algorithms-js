/*

Find the index where the larger string A contains a target string T.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function stringSearch(str: string, target: string) {
  if (str === null || target === null) {
    return null;
  }

  if (target.length === 0) {
    return 0;
  }

  if (target.length > str.length) {
    return -1;
  }

  let x = 53; // a prime number

  // calculate hash for first target.length letters
  let hashT = 0;
  let hash = 0;

  for (let i = 0; i < target.length; i++) {
    hashT = hashT * x + target.charCodeAt(i);
    hash = hash * x + str.charCodeAt(i);
  }

  // found match in first substring
  if (hashT === hash && target === str.substring(0, target.length)) {
    return 0;
  }

  let xPow = 1;

  for (let i = 0; i < target.length - 1; i++) {
    xPow *= x;
  }

  for (let i = target.length; i < str.length; i++) {
    let toRemove = str.charCodeAt(i - target.length);

    hash = (hash - toRemove * xPow) * x + str.charCodeAt(i);

    if (
      hash === hashT &&
      target === str.substring(i - target.length + 1, i + 1)
    ) {
      return i - target.length + 1;
    }
  }

  return -1;
}

console.log(stringSearch('hello world', 'orl')); // 7
