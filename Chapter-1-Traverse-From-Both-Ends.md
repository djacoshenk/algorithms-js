# Chapter 1 - Traverse From Both Ends

## Traversing Array From Both Ends

Q. Given an array, reverse the order of its elements.

Input: [3,5,2,5,2,3,9]
Output: [9,3,2,5,2,5,3]

[3,5,2,5,2,3,9]
 ^           ^
 i           j

Time Complexity: O(n) aka linear time
Space Complexity: O(1) aka constant space

```javascript
function arrTraverseBothEnds(arr) {
  // check for null/undefined
  if (arr == null) {
    return;
  }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr;
}

arrTraverseBothEnds([3,5,2,5,2,3,9])
```

Q.  Given a sorted array of integers, find two numbers in the array that sum to a given integer target.

Input: ([1,2,3,5,6,7], 11)
Output: (5,6)

[1,2,3,5,6,7]
 ^         ^
 i         j

Time Complexity: O(n)
Space Complexity: O(1)

```javascript
function arrTraverseBothEnds(arr, target) {
  // check for null/undefined
  if (arr == null) {
    return;
  }

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let sum = arr[i] + arr[j];

    if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    } else if (sum === target) {
      return [arr[i], arr[j]];
    }
  }

  // if the arr does not pass any of the conditions, return null
  return null;
}

arrTraverseBothEnds([1,2,3,5,6,7], 11)
```

Q. Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. 

Input: [-4,-2,-1,0,3,5]
Output: [0,1,4,9,16,25]

[-4,-2,-1,0,3,5]
     ^      ^
     i      j

[ , , , , , ]
           ^

Time Complexity: O(n)
Space Complexity: O(n)

```javascript
function sortSquaresArr(arr) {
  if (arr == null) {
    return null;
  }

  let i = 0;
  let j = arr.length - 1;

  // allocate a new array and track its index
  let result = new Array(arr.length);
  let resultIndex = result.length - 1;

  while (i <= j) {
    if (Math.abs(arr[i]) > Math.abs(arr[j])) {
      result[resultIndex] = Math.pow(arr[i], 2);
      i++;
    } else {
      result[resultIndex] = Math.pow(arr[j], 2);
      j--;
    }

    resultIndex--;
  }

  return result;
}

sortSquaresArr([-4,-2,-1,0,3,5])
```

Q. Given an array of integers, find the shortest sub array, that if sorted, results in the entire array being sorted.

Input: [1,3,5,2,6,4,7,8,9]
Output: [3,5,2,6,4]

Time Complexity: O(n)
Space Complexity: O(1)

```javascript
function shortestUnsortedSubArr(arr) {
  if (arr == null || arr.length == 0) {
    return null;
  }

  let i = 0;
  let j = arr.length -1;

  // find dip
  while (i < j) {
    if (arr[i] > arr[i+1]) {
      break;
    }

    i++;
  }

  // no dip found, array is already sorted
  if (i === j) {
    return null;
  }

  // find bump
  while (j > 0) {
    if (arr[j] < arr[j-1]) {
      break;
    }

    j--;
  }

  // find min and max of arr[start..end]
  let k = i;
  let min = arr[k];
  let max = arr[k];

  while (k <= j) {
    if (arr[k] > max) {
      max = arr[k];
    }

    if (arr[k] < min) {
      min = arr[k];
    }

    k++;
  }

  // expand start and end outward
  while (i > 0 && arr[i-1] > min) {
    i--;
  }

  while (j < (arr.length - 1) && arr[j+1] < max) {
    j++;
  }

  return arr.slice(i,j+1);
}

shortestUnsortedSubArr([1,3,5,2,6,4,7,8,9])
```