/*

Implement a Queue using 2 stacks.

Time Complexity: Enqueue: O(1) & Dequeue: O(n) in the worst case, O(1) amortized
Space Complexity: O(1) extra space

*/

export class Queue {
  s1: Stack;
  s2: Stack;

  constructor(s1: Stack, s2: Stack) {
    this.s1 = s1;
    this.s2 = s2;
  }

  enqueue(addTo: Node) {
    this.s1.push(addTo);
  }

  dequeue() {
    if (this.s2.isEmpty()) {
      this.flushToS2();
    }

    return this.s2.pop();
  }

  flushToS2() {
    while (!this.s1.isEmpty()) {
      const addTo = this.s1.pop()!;

      this.s2.push(new Node(addTo));
    }
  }
}

export class Stack {
  head: Node | null;

  constructor(head: Node | null = null) {
    this.head = head;
  }

  isEmpty() {
    if (this.head) {
      return false;
    } else {
      return true;
    }
  }

  push(addTo: Node) {
    addTo.next = this.head;
    this.head = addTo;
  }

  pop() {
    if (this.head) {
      const data = this.head.data;
      this.head = this.head.next;
      return data;
    } else {
      return null;
    }
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }
  }
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}
