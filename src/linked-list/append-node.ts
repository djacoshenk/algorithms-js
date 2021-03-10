export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }

  setNext(next: Node) {
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
        this.tail.setNext(addTo);
      }
    }

    this.tail = addTo;
  }
}
