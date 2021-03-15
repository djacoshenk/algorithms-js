/*

Implement a Queue using a linked list.

*/

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
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
      throw new Error('Underflow');
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

const NODE_3 = new Node(11);
const NODE_2 = new Node(7, NODE_3);
const NODE_1 = new Node(3, NODE_2);

const QUEUE_1 = new Queue(NODE_1, NODE_3);

QUEUE_1.enqueue(5); // enqueue a new Node with data of 5

QUEUE_1.dequeue(); // dequeue the first Node

console.log(QUEUE_1);
