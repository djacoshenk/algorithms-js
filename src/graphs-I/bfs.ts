/*

Given a graph and a target number T, find T exists in the graph.

Time Complexity: O(V + E)
Space Complexity: O(V)

*/

function bfsVisit(node: Node, target: number) {
  let queue = new Queue(); // initialize an empty queue
  queue.enqueue(node); // enqueue the node
  node.state = NODE_STATES.VISITING; // mark node as visiting

  while (!queue.isEmpty()) {
    let current = queue.dequeue()!; // dequeue node

    if (current.data === target) {
      return true;
    }

    // iterate over the node's neighbors
    for (let neighbor of current.neighbors) {
      if (neighbor.state === NODE_STATES.UNVISITED) {
        queue.enqueue(neighbor); // enqueue node
        neighbor.state = NODE_STATES.VISITING; // mark node as visiting
      }
    }

    current.state = NODE_STATES.VISITED;
  }

  return false;
}

export function bfs(graph: Graph, target: number) {
  // iterate over nodes in graph
  for (let node of graph.nodes) {
    if (node.state === NODE_STATES.UNVISITED && bfsVisit(node, target)) {
      return true;
    }
  }

  return false;
}

const NODE_STATES = {
  VISITED: 'VISITED',
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
};

export class Graph {
  nodes: Node[];

  constructor() {
    this.nodes = [];
  }
}

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

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
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
      false;
    }
  }
}
