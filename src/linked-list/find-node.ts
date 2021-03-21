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
