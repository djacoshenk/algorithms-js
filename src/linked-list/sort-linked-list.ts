/*

You are given a LinkedList with nodes that have values 0, 1 or 2. Sort the linked list.

Time Complexity: O(n)
Space Complexity: O(1)

*/

export function sortList(input: LinkedList) {
  if (input == null) {
    return new LinkedList(); // empty list
  }

  let list0 = new LinkedList(); // initialize an empty list for 0s
  let list1 = new LinkedList(); // initialize an empty list for 1s
  let list2 = new LinkedList(); // initialize an empty list for 2s

  let current = input.head;

  // iterate through all the nodes in the list (2 --> 1 --> 0 --> 1 --> 2 --> 0)
  while (current !== null) {
    let data = current.data; // get data from node --> 0, 1, or 2

    if (data === 0) {
      list0.append(current);
    } else if (data === 1) {
      list1.append(current);
    } else if (data === 2) {
      list2.append(current);
    } else {
      throw new Error('Invalid value');
    }

    current = current.next; // iterate to the next node
  }

  // set tails to null (1 --> 1 --> null)
  if (list0.tail !== null) {
    list0.tail.next = null;
  }

  if (list1.tail !== null) {
    list1.tail.next = null;
  }

  if (list2.tail !== null) {
    list2.tail.next = null;
  }

  // attach lists in sequence
  let result = new LinkedList();
  appendList(result, list0);
  appendList(result, list1);
  appendList(result, list2);

  return result;
}

export function appendList(result: LinkedList, toAppend: LinkedList) {
  if (toAppend === null || toAppend.head === null) {
    return;
  }

  result.append(toAppend.head);
  result.tail = toAppend.tail;
}

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

  append(addTo: Node) {
    if (!this.head || !this.tail) {
      this.head = addTo;
    } else {
      this.tail.next = addTo;
    }

    this.tail = addTo;
  }
}
