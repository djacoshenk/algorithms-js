/*

Sort a graph in topological order.

Time Complexity: O(V + E), where V is vertices (nodes) and E is edges.
Space Complexity: O(V)

*/

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

export class Stack {
  head: Node | null;

  constructor(head: Node | null = null) {
    this.head = head;
  }

  push(node: Node) {
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}

export function topoSort(graph: Graph) {
  let stack = new Stack();

  for (let node of graph.nodes) {
    if (node.state === NODE_STATES.UNVISITED) {
      dfsVisit(node, stack);
    }
  }

  return stack;
}

export function dfsVisit(node: Node, stack: Stack) {
  node.state = NODE_STATES.VISITING;

  for (let neighbor of node.neighbors) {
    if (neighbor.state === NODE_STATES.VISITED) {
      dfsVisit(neighbor, stack);
    }
  }

  node.state = NODE_STATES.VISITED;
  stack.push(node);
}
