/*

You are given a LinkedList with nodes that have values 0, 1 or 2. Sort the linked list.

Time Complexity: O(n)
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

  append(addTo: Node) {
    if (this.head == null) {
      this.head = addTo;
    } else {
      if (this.tail == null) {
        this.tail = addTo;
      } else {
        this.tail.setNext(addTo);
      }
    }

    this.tail = addTo;
  }

  sortList(input: LinkedList) {
    if (input == null) {
      return new LinkedList(); // empty list
    }

    let list0 = new LinkedList(); // initialize an empty list for 0s
    let list1 = new LinkedList(); // initialize an empty list for 1s
    let list2 = new LinkedList(); // initialize an empty list for 2s

    let current = input.head;

    while (current != null) {
      let data = current.getData(); // get data from node --> 0, 1, or 2

      if (data === 0) {
        list0.append(current);
      } else if (data === 1) {
        list1.append(current);
      } else if (data === 2) {
        list2.append(current);
      } else {
        throw new Error('Invalid value');
      }

      current = current.getNext(); // iterate to the next node
    }

    // set tails to null
    if (list0.tail != null) {
      list0.tail.next = null;
    }

    if (list1.tail != null) {
      list1.tail.next = null;
    }

    if (list2.tail != null) {
      list2.tail.next = null;
    }

    // attach lists in sequence
    let result = new LinkedList();
    this.appendList(list0, result);
    this.appendList(list1, result);
    this.appendList(list2, result);

    return result;
  }

  appendList(toAppend: LinkedList, original: LinkedList) {
    if (toAppend == null || toAppend.head == null) {
      return;
    }

    original.append(toAppend.head);
    original.tail = toAppend.tail;
  }
}
