/*

Implement a Queue using an array.

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

    const result = this.arr[this.front];
    this.front = (this.front + 1) % this.arr.length;
    this.length--;
    return result;
  }
}
