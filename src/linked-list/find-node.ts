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

  findNode(n: number) {
    let node = this.head;

    for (let i = 1; i < n; i++) {
      if (node !== null) {
        node = node.next;
      } else {
        return `No node at index ${n}`;
      }
    }

    if (node === null) {
      return `No node at index ${n}`;
    }

    return node;
  }
}

// create nodes
const NODE_3 = new Node(3);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

// create linked list from nodes
const LIST_1 = new LinkedList(NODE_1, NODE_3);

// find node 1
console.log(LIST_1.findNode(1));

// find node 2
console.log(LIST_1.findNode(2));

// find node 3
console.log(LIST_1.findNode(3));
