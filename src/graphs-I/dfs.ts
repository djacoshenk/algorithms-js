/*

Given a graph and a target number T, find T exists in the graph.

Time Complexity: O(V + E), where V is Vertices, and E is Edges
Space Complexity: O(V) in worse case

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

  constructor(data: number) {
    this.data = data;
    this.neighbors = [];
    this.state = NODE_STATES.UNVISITED;
  }
}

export function dfs(graph: Graph, target: number) {
  // iterate over the nodes in the graph
  for (let node of graph.nodes) {
    // if the node state is unvisited
    if (node.state === NODE_STATES.UNVISITED && dfsVisit(node, target)) {
      return true;
    }
  }

  return false;
}

export function dfsVisit(node: Node, target: number) {
  node.state = NODE_STATES.VISITING; // mark node state as visiting

  // if the node data equals the target value, return true
  if (target === node.data) {
    return true;
  }

  // iterate over the visiting nodes neighbors
  for (let neighbor of node.neighbors) {
    if (
      neighbor.state === NODE_STATES.UNVISITED &&
      dfsVisit(neighbor, target)
    ) {
      return true;
    }
  }

  node.state = NODE_STATES.VISITED;

  return false;
}
