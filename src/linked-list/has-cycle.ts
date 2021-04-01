/*

Find if a given Linked List has a cycle.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function hasCycle(head: Node) {
  let fast = head;
  let slow = head;

  while (fast !== null) {
    fast = fast.next!; // advance fast pointer to next node

    // check if the fast pointer is equal to the slow pointer
    if (fast === slow) {
      return true;
    }

    if (fast !== null) {
      fast = fast.next!; // advance fast pointer to next node

      // check if the fast pointer is equal to the slow pointer
      if (fast === slow) {
        return true;
      }
    }

    // advance slow pointer to the next node
    slow = slow.next!;
  }

  return false;
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}
