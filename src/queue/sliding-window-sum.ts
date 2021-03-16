/*

Given an array of integers A, find the sum of each sliding window of size K.

Time Complexity: O(n)
Space Complexity: O(K), because we store at most K nodes in the queue

*/

export class Queue {
  arr: number[];
  front: number;
  back: number;
  length: number;

  constructor(capacity: number) {
    this.arr = new Array(capacity);
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }

  enqueue(data: number) {
    if (this.length === this.arr.length) {
      throw new Error('Queue full');
    }

    this.arr[this.back] = data;
    this.back = (this.back + 1) % this.arr.length;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error('Queue empty');
    }

    const data = this.arr[this.front];
    this.front = (this.front + 1) % this.arr.length;
    this.length--;
    return data;
  }
}

export function windowSum(arr: number[], windowSize: number) {
  if (arr === null || arr.length === 0 || windowSize === 0) {
    return null;
  }

  let sum = 0;
  let queue = new Queue(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (queue.length === windowSize) {
      const front = queue.dequeue();

      sum -= front;
    }

    queue.enqueue(arr[i]);
    sum += arr[i];

    if (queue.length === windowSize) {
      printSum(sum);
    }
  }
}

function printSum(sum: number) {
  console.log(sum);
}

windowSum([1, 3, 4, 5, 7, 8, 9], 3);
