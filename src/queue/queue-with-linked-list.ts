/*

Implement a Queue using a linked list.

*/

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data: number) {
    const toAdd = new Node(data);

    if (!this.head || !this.tail) {
      this.head = toAdd;
      this.tail = toAdd;
    } else {
      this.tail.next = toAdd;
      this.tail = toAdd;
    }
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Queue empty');
    }

    const data = this.head.data;
    this.head = this.head.next;
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

const QUEUE_1 = new Queue();

QUEUE_1.enqueue(2);
QUEUE_1.enqueue(4);
QUEUE_1.enqueue(6);

console.log(QUEUE_1.dequeue());

console.log(QUEUE_1);
