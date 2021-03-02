# Chapter 1 - Partitioning Arrays

## Partitioning Arrays

Q. You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.

Input: [4,2,0,1,0,3,0]
Output: [0,0,0,4,1,2,3]

Time Complexity: O(n)
Space Complexity: O(1)

[4,2,0,1,0,3,0]
 ^   ^      
 i   j

```javascript
function moveZeroesBeg(arr) {
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }

    j++;
  }

  return arr;
}

moveZeroesBeg([4,2,0,1,0,3,0])
```

Q. Given an array of integers, rearrange the elements such that all zeros are moved to the end of the array.

Input: [4,2,0,1,0,3,0]
Output: [4,1,2,3,0,0,0]

[4,2,0,1,0,3,0]
           ^ ^      
           j i

Time Complexity: O(n)
Space Complexity: O(1)

```javascript
function moveZeroesEnd(arr) {
  let i = arr.length - 1;
  let j = arr.length - 1;

  while (j >= 0) {
    if (arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i--;
    }

    j--;
  }

  return arr;
}

moveZeroesEnd([4,2,0,1,0,3,0])
```

Q. You are given an array of integers and a pivot. Rearrange the array in the following order:[all elements less than pivot, elements equal to pivot, elements greater than pivot].

Input: ([5,2,4,4,6,4,4,3], 4)
Output: [3,2,4,4,4,4,6,5]

[5,2,4,4,6,4,4,3]
 ^             ^
(i,low)      high

Time Complexity: O(n)
Space Complexity: O(1)

```javascript
function arrPartition(arr, pivot) {
  let i = 0;
  let j = arr.length - 1;
  let k = 0;

  while (k <= j) {
    if (arr[k] < pivot) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      i++;
      k++;
    } else if (arr[k] > pivot) {
      [arr[j], arr[k]] = [arr[k], arr[j]];
      j--;
    } else {
      k++;
    }
  }

  return arr;
}

arrPartition([5,2,4,4,6,4,4,3], 4)
```