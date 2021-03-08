class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  setNext(toAdd) {
    this.next = toAdd;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(toAdd) {
    if (this.head == null) {
      this.head = toAdd;
    } else {
      this.tail.setNext(toAdd);
    }

    this.tail = toAdd;
  }
}

const list = new LinkedList(new Node(1, new Node(2)), new Node(2));

console.log(list.append(new Node(3)));
