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

  enqueue(item: number) {
    if (this.length === this.arr.length) {
      throw new Error('Queue full');
    }

    this.arr[this.back] = item;
    this.back = (this.back + 1) % this.arr.length;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error('Queue empty');
    }

    let result = this.arr[this.front];
    this.front = (this.front + 1) % this.arr.length;
    this.length--;
    return result;
  }
}

const QUEUE_1 = new Queue(5);

QUEUE_1.enqueue(3); // [3, , , , ]
QUEUE_1.enqueue(4); // [3, 4, , , ]
QUEUE_1.enqueue(5); // [3, 4, 5, , ]
QUEUE_1.enqueue(7); // [3, 4, 5, 7, ]
QUEUE_1.enqueue(8); // [3, 4, 5, 7, 8]

console.log(QUEUE_1);
