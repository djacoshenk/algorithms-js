/*

Implement a Stack with a max() function. This function runs in O(1) time and returns thevalue of the maximum number on the stack.

Time Complexity: ​O(1) for push and pop
Space Complexity:​ O(n) for n insertions

*/

export class StackWithMax {
  main: Stack;
  max: Stack;

  constructor() {
    this.main = new Stack();
    this.max = new Stack();
  }

  push(a: Node) {
    this.main.push(a);

    if (this.max.isEmpty() || a.data >= this.max.peek()!) {
      this.max.push(a);
    }
  }

  findMax() {
    if (this.max.isEmpty()) {
      throw new Error('Stack empty');
    }

    return this.max.peek();
  }

  pop() {
    if (this.main.isEmpty()) {
      throw new Error('Stack empty');
    }

    let item = this.main.pop();

    if (this.max.peek() === item) {
      this.max.pop();
    }

    return item;
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
