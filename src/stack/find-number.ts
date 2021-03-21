/*

Find if a given number N exists in a stack S.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function findNumber(stack: Stack, target: number) {
  if (stack === null) {
    return false;
  }

  let temp = new Stack();
  let found = false;

  // if target node is found, then return true and break, otherwise push nodes to temp stack
  while (!stack.isEmpty()) {
    if (stack.peek() === target) {
      found = true;
      break;
    }

    let toAdd = stack.pop()!;

    temp.push(toAdd);
  }

  // reset original stack by pushing temp stack nodes to original stack
  while (!temp.isEmpty()) {
    let toAdd = temp.pop()!;

    stack.push(toAdd);
  }

  return found;
}

export class Stack {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head) {
      return false;
    } else {
      return true;
    }
  }

  push(data: number) {
    const toAdd = new Node(data);
    toAdd.next = this.head;
    this.head = toAdd;
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
