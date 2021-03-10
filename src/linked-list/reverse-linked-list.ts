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
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
  }

  reverseList() {
    let prev = null;
    let curr = this.head;

    while (curr != null) {
      let next = curr.getNext();
      curr.setNext(prev);
      prev = curr;
      curr = next;
    }

    return prev;
  }
}
