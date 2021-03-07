class LinkedListNode {
  data: number;
  next: LinkedListNode | null;

  constructor(data: number, next: LinkedListNode | null = null) {
    this.data = data;
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;

  constructor(head: LinkedListNode, tail: LinkedListNode) {
    this.head = head;
    this.tail = tail;
  }

  findNode(n: number) {
    let node: LinkedListNode | null = this.head;

    for (let i = 0; i < n - 1; i++) {
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

let list = new LinkedList(
  new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3))),
  new LinkedListNode(3)
);

console.log(list.findNode(1));
console.log(list.findNode(2));
console.log(list.findNode(3));
console.log(list.findNode(4));
