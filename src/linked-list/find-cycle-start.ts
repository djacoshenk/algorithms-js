/*

Given a Linked List with a cycle, find the node where the cycle begins.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function findCycleStart(head: Node) {
  // advance fast and slow pointers to meet in the cycle
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

  // no cycle found
  if (fast === null) {
    return null;
  }

  // find number of nodes in the cycle
  fast = fast.next!;
  let cycleNodes = 1;

  while (fast !== slow) {
    fast = fast.next!;
    cycleNodes++;
  }

  // find start of cycle
  let front = head;
  let back = head;
  for (let i = 0; i < cycleNodes; i++) {
    front = front.next!;
  }

  while (front !== back) {
    front = front.next!;
    back = back.next!;
  }

  return front;
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}
