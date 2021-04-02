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

  appendNode(addTo: Node) {
    if (this.head === null || this.tail === null) {
      this.head = addTo;
      this.tail = addTo;
    } else {
      this.tail.next = addTo;
    }

    this.tail = addTo;
  }

  deleteNode(n: Node, prev: Node | null) {
    if (n === null) {
      return;
    }

    if (n === this.head) {
      this.head = n.next;
    }

    if (n === this.tail) {
      this.tail = prev;
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
