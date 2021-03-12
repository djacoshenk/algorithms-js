/*

Find the median node of a linked list. 

For example:
1 -> 2 -> 3 -> 4 -> 5 Median node is 3.

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

export class LinkedList {
  head: Node;
  tail: Node;

  constructor(head: Node, tail: Node) {
    this.head = head;
    this.tail = tail;
  }
}

export function findMedian(head: Node, tail: Node) {
  // check falsy values
  if (head === null || tail === null) {
    return null;
  }

  // initialize fast and slow pointers to head
  let fast = head;
  let slow = head;

  // if the next node is not null, then advance fast pointer
  while (fast.next !== null) {
    fast = fast.next;

    // if the next node is not null, then advance the fast and slow pointers
    if (fast.next !== null) {
      fast = fast.next;
      slow = slow.next!;
    }
  }

  return slow;
}
