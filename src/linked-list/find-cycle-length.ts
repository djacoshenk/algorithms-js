/*

Given a linked list that has a cycle, find the length of the cycle. The length is in number of nodes.

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

export function findCycleLength(head: Node) {
  let fast = head;
  let slow = head;

  while (fast !== null) {
    fast = fast.next!;

    if (fast === slow) {
      break;
    }

    if (fast !== null) {
      fast = fast.next!;

      if (fast === slow) {
        break;
      }
    }

    slow = slow.next!;
  }

  if (fast === null) {
    return -1;
  }

  fast = fast.next!;
  let cycleNodes = 1;

  while (fast !== slow) {
    fast = fast.next!;
    cycleNodes++;
  }

  return cycleNodes;
}
