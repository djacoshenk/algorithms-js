/*

Sort a graph in topological order.

Time Complexity: O(V + E), where V is vertices (nodes) and E is edges.
Space Complexity: O(V)

*/

export class Graph {
  nodes: Node[];

  constructor(nodes: Node[] = []) {
    this.nodes = nodes;
  }
}

export class Node {
  data: number;
  neighbors: Node[];
  state: string;

  constructor(data: number) {
    this.data = data;
    this.neighbors = new Array<Node>();
    this.state = NODE_STATES.UNVISITED;
  }
}

const NODE_STATES = {
  VISITED: 'VISITED',
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
};

export function topoSort(graph: Graph) {
  let stack = new Array<Node>();

  for (let node of graph.nodes) {
    if (node.state === NODE_STATES.UNVISITED) {
      dfsVisit(node, stack);
    }
  }

  return stack;
}

export function dfsVisit(node: Node, stack: Node[]) {
  node.state = NODE_STATES.VISITING;

  for (let neighbor of node.neighbors) {
    if (neighbor.state === NODE_STATES.VISITED) {
      dfsVisit(neighbor, stack);
    }
  }

  node.state = NODE_STATES.VISITED;
  stack.push(node);
}
