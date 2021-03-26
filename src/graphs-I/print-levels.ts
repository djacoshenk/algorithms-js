/*

Given a graph and a node N, print the Graph in order of distance from N. Each level should be in a new line.

Time Complexity:​ O(V+E)
Space Complexity:​ O(V)

*/

export function printLevels(root: Node) {
  let currentLevel = new Queue();
  let nextLevel = new Queue();

  currentLevel.enqueue(root);

  root.state = NODE_STATES.VISITING;

  while (!currentLevel.isEmpty()) {
    let current = currentLevel.dequeue()!;

    printCurrentHelper(current);

    for (let neighbor of current.neighbors) {
      if (neighbor.state === NODE_STATES.UNVISITED) {
        nextLevel.enqueue(neighbor);
        neighbor.state = NODE_STATES.VISITING;
      }
    }

    current.state = NODE_STATES.VISITED;

    if (currentLevel.isEmpty()) {
      currentLevel = nextLevel;

      nextLevel = new Queue();
    }
  }
}

function printCurrentHelper(current: Node) {
  console.log(current);
}

const NODE_STATES = {
  VISITED: 'VISITED',
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
};

export class Node {
  data: number;
  neighbors: Node[];
  state: string;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.neighbors = [];
    this.state = NODE_STATES.UNVISITED;
    this.next = null;
  }
}

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(node: Node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
  }

  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }
}
