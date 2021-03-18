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
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
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

const NODE_6 = new Node(6);
const NODE_5 = new Node(5, NODE_6);
const NODE_4 = new Node(4, NODE_5);
const NODE_3 = new Node(3, NODE_4);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

const LIST_1 = new LinkedList(NODE_1, NODE_6);

LIST_1.tail!.next = LIST_1.head;

console.log(LIST_1);

console.log(findCycleLength(NODE_1));
