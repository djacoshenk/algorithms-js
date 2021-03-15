/*

Given an array of integers A, find the sum of each sliding window of size K.

Time Complexity: O(n)
Space Complexity: O(K), because we store at most K nodes in the queue

*/

export class Queue {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  enqueue(data: number) {
    const toAdd = new Node(data);

    if (!this.head || !this.tail) {
      this.head = toAdd;
      this.tail = toAdd;
      this.length++;
    } else {
      this.tail.next = toAdd;
      this.tail = toAdd;
      this.length++;
    }
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Underflow');
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

export function windowSum(arr: number[], windowSize: number) {
  if (arr === null || arr.length === 0 || windowSize === 0) {
    return null;
  }

  let sum = 0;
  let queue = new Queue();

  for (let i = 0; i < arr.length; i++) {
    if (queue.length === windowSize) {
      let last = queue.dequeue();

      sum -= last;
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
