export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }

  setNext(addTo: Node) {
    this.next = addTo;
  }
}

export class LinkedList {
  head: Node;
  tail: Node;

  constructor(head: Node, tail: Node) {
    this.head = head;
    this.tail = tail;
  }

  append(addTo: Node) {
    if (this.head === null) {
      this.head = addTo;
    } else {
      this.tail.setNext(addTo);
    }

    this.tail = addTo;
  }
}

const list = new LinkedList(new Node(1), new Node(1));

console.log(list.append(new Node(2)));
console.log(list);
