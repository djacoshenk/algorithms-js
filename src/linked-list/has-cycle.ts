/*

Find if a given Linked List has a cycle.

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
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
  }
}

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

const NODE_6 = new Node(6);
const NODE_5 = new Node(5, NODE_6);
const NODE_4 = new Node(4, NODE_5);
const NODE_3 = new Node(3, NODE_4);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

const LIST_1 = new LinkedList(NODE_1, NODE_6);

LIST_1.tail!.next = LIST_1.head;

console.log(hasCycle(LIST_1.head!)); // true

const NODE_10 = new Node(10);
const NODE_9 = new Node(9, NODE_10);
const NODE_8 = new Node(8, NODE_9);
const NODE_7 = new Node(7, NODE_8);

const LIST_2 = new LinkedList(NODE_7, NODE_10);

console.log(hasCycle(LIST_2.head!)); // false
