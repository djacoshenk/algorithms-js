class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}

class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  findNode(n) {
    let node = this.head;

    // i represents the number of times you want to call getNext() - if you want node 2, you would call getNext() only once
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

let list = new LinkedList(new Node(1, new Node(2, new Node(3))), new Node(3));

console.log(list.findNode(1));
console.log(list.findNode(2));
console.log(list.findNode(3));
console.log(list.findNode(4));
