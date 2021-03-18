/*

Reverse a linked list. You should use O(1) space.

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
}

export function reverseList(head: Node) {
  if (head === null) {
    return null;
  }

  let prev = null;
  let curr: Node | null = head;

  while (curr !== null) {
    let next: Node | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

const NODE_6 = new Node(6);
const NODE_5 = new Node(5, NODE_6);
const NODE_4 = new Node(4, NODE_5);
const NODE_3 = new Node(3, NODE_4);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

console.log(NODE_1);

console.log(reverseList(NODE_1));
