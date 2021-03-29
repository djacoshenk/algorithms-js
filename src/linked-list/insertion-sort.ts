/*

Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

*/

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

export function insertionSortList(head: Node) {
  if (head === null) {
    return null;
  }

  let sortedList = head; // allocate a new list with reference to head node
  head = head.next!; // reset head to next node
  sortedList.next = null; // reset sorted list next node

  while (head !== null) {
    let prev = null;
    let node = sortedList;

    while (node !== null && head.data > node.data) {
      prev = node;
      node = node.next!;
    }

    let addNode = head;
    head = head.next!; // reset head to next node
    addNode.next = node;

    if (prev) {
      prev.next = addNode;
    } else {
      sortedList = addNode;
    }
  }

  return sortedList;
}
