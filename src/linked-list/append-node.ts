export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
  }

  appendNode(addTo: Node) {
    if (this.head === null) {
      this.head = addTo;
    } else {
      if (this.tail === null) {
        this.tail = addTo;
      } else {
        this.tail.next = addTo;
      }
    }

    this.tail = addTo;
  }
}
// create nodes
const NODE_3 = new Node(3);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

// create linked list from nodes
const LIST_1 = new LinkedList(NODE_1, NODE_3);

// create new node to append
const NODE_4 = new Node(4);

// append new node to linked list
LIST_1.appendNode(NODE_4);

console.log(LIST_1);
