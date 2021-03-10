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

  getNext() {
    return this.next;
  }

  setNext(next: Node | null) {
    this.next = next;
  }

  getData() {
    return this.data;
  }

  setData(data: number) {
    this.data = data;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
  }

  getHead() {
    return this.head;
  }

  setHead(head: Node) {
    this.head = head;
  }

  getTail() {
    return this.tail;
  }

  setTail(tail: Node) {
    this.tail = tail;
  }

  deleteNode(n: Node, prev: Node) {
    if (n == null) {
      return;
    }

    if (n === this.head) {
      this.head = n.getNext();
    } else if (n === this.tail) {
      this.tail = prev;
    }

    if (prev != null) {
      n.setNext(n.getNext());
    }
  }

  deleteNodeWithoutPrev(n: Node) {
    let next = n.getNext();

    if (next == null) {
      return;
    }

    n.setData(next.getData());
    this.deleteNode(next, n);
  }
}
