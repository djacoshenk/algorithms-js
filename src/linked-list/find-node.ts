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

  setNext(next: Node) {
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
  head: Node;
  tail: Node;

  constructor(head: Node, tail: Node) {
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

  findNode(n: number) {
    let node: Node | null = this.head;

    for (let i = 1; i < n; i++) {
      if (node != null) {
        node = node.getNext();
      } else {
        return `No node at index ${n}`;
      }
    }

    if (node == null) {
      return `No node at index ${n}`;
    }

    return node;
  }
}
