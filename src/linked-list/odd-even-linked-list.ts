/*

Given a Linked List L, separate it into 2 Linked Lists.
One contains L's odd nodes and the other contains L's even nodes.

For example:
Input: Head -> 1 -> 2 -> 3 -> 4 -> 5

Result 1: Head -> 1 -> 3 -> 5
Result 2: Head -> 2 -> 4

Time Complexity: O(n)
Space Complexity: O(1) because we are rearranging the nodes

*/

export function getOddEven(input: LinkedList) {
  let odd = new LinkedList();
  let even = new LinkedList();

  let current = input.head;
  let index = 1;

  while (current !== null) {
    let destination = index % 2 === 0 ? even : odd;

    destination.append(current);

    current = current.next;

    index++;
  }

  // set tail nodes' next to null
  if (even.tail !== null) {
    even.tail.next = null;
  }

  if (odd.tail !== null) {
    odd.tail.next = null;
  }

  return [odd, even];
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(node: Node) {
    if (!this.head) {
      this.head = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
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
