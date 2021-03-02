# Chapter 1 - Reverse Traversal

## Traversing Array in Reverse

Q. Given an array of numbers, replace each even number with two of the same number.

Input:  [1,2,5,6,8,-1,-1,-1] 
Output: [1,2,2,5,6,6,8,8]

[1,2,5,6,8,-1,-1,-1]
         ^        ^
         i        j

Time Complexity: O(n) aka linear time
Space Complexity: O(1) aka constant space

```javascript
function arrTraverseReverse(arr) {
  let i = findLastNumber(arr);
  let j = arr.length - 1;

  while (i >= 0) {
    // if the number is even, move to the end and advance the end pointer (twice)
    if (arr[i] % 2 === 0) {
      arr[j] = arr[i];
      j--;
      arr[j] = arr[i];
      j--;
    // if the number is odd, move to the end and advance the end pointer (once) 
    } else {
      arr[j] = arr[i];
      j--;
    }

    // we always want to advance the start pointer for the next iteration
    i--;
  }

  return arr;
}

// helper function to find the last index which does not contain -1
function findLastNumber(arr) {
  let i = arr.length - 1;

  while (i >= 0 && arr[i] === -1) {
    i--;
  }

  return i;
}

arrTraverseReverse([1,2,5,6,8,-1,-1,-1])
```

Q. Given a sentence, reverse the words of the sentence.

Input: 'I live in a house'
Output: 'house a in live i'

'I live in a house'
            ^      ^
            i      j

Time Complexity: O(n)
Space Complexity: O(n)

```javascript
function reverseWords(str) {
  // check for falsy values (null, undefined, empty strings)
  if (!str) {
    return str;
  }

  let i = str.length - 1;
  let j = str.length;
  let reversedStr = '';

  while (i >= 0) {
    // if a space is encountered, take the substring and add to the reversed string 
    if (str[i] === ' ') {
      reversedStr += str.substring(i+1, j) + ' ';
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

reverseWords('I live in a house');
```