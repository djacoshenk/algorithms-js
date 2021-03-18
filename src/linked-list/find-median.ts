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
  head: Node | null;
  tail: Node | null;

  constructor(head: Node | null = null, tail: Node | null = null) {
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

const NODE_5 = new Node(5);
const NODE_4 = new Node(4, NODE_5);
const NODE_3 = new Node(3, NODE_4);
const NODE_2 = new Node(2, NODE_3);
const NODE_1 = new Node(1, NODE_2);

const LIST_1 = new LinkedList(NODE_1, NODE_5);

console.log(findMedian(LIST_1.head!, LIST_1.tail!)); // NODE_3
