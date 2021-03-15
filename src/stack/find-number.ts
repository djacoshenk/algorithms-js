/*

Find if a given number N exists in a stack S.

Time Complexity: O(n)
Space Complexity: O(1)

*/

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

  push(toAdd: Node) {
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

    temp.push(new Node(toAdd));
  }

  // reset original stack by pushing temp stack nodes to original stack
  while (!temp.isEmpty()) {
    let toAdd = temp.pop()!;

    stack.push(new Node(toAdd));
  }

  return found;
}

const NODE_3 = new Node(3);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);
const STACK_1 = new Stack(NODE_1);

console.log(findNumber(STACK_1, 2)); // true
console.log(findNumber(STACK_1, 3)); // true
console.log(findNumber(STACK_1, 4)); // false
