/*

Given a graph and a target number T, find T exists in the graph.

Time Complexity: O(V + E)
Space Complexity: O(V)

*/

function bfsVisitArray(node: Node, target: number) {
  let queue: Node[] = [];
  queue.push(node);

  while (queue.length > 0) {
    let current = queue.shift()!;

    if (current.data === target) {
      return true;
    }

    for (let neighbor of current.neighbors) {
      if (neighbor.state === NODE_STATES.UNVISITED) {
        neighbor.state = NODE_STATES.VISITING;
        queue.push(neighbor);
      }
    }

    current.state = NODE_STATES.VISITED;
  }

  return false;
}

export function bfsArray(graph: Graph, target: number) {
  for (let node of graph.nodes) {
    if (node.state === NODE_STATES.UNVISITED && bfsVisitArray(node, target)) {
      return true;
    }
  }

  return false;
}

const NODE_STATES = {
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
  VISITED: 'VISITED',
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

  constructor(data: number) {
    this.data = data;
    this.neighbors = [];
    this.state = NODE_STATES.UNVISITED;
  }
}
