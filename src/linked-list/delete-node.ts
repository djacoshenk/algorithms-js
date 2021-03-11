/*

Given a linked list and pointers to a node N and its previous node Prev, delete N fromthe linked list.

Time Complexity: O(1)
Space Complexity: O(1)

*/

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

  deleteNode(n: Node, prev: Node) {
    if (n === null) {
      return;
    }

    if (n === this.head) {
      this.head = n.next;
    }

    if (n === this.tail) {
      this.tail = prev;
      this.tail.next = null;
    }

    if (prev !== null) {
      prev.next = n.next;
    }
  }

  deleteNodeWithoutPrev(n: Node) {
    // if the node we want to delete is the tail, we cannot delete it
    if (n.next === null) {
      return;
    }

    n.data = n.next.data;

    this.deleteNode(n.next, n);
  }
}

// create nodes
const NODE_4 = new Node(4);
const NODE_3 = new Node(3, NODE_4);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

// create linked list from nodes
const LIST_1 = new LinkedList(NODE_1, NODE_4);

LIST_1.deleteNode(NODE_2, NODE_1);

console.log(LIST_1);
