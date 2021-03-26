/*

Given a directed graph, find the length of the longest path in the graph.
The path can start from any node.

Time Complexity: O(V+E)
Space Complexity: O(V)

*/

function dfsVisit(node: Node, stack: Node[]) {
  node.state = NODE_STATES.VISITING;

  for (let neighbor of node.neighbors) {
    if (neighbor.state === NODE_STATES.UNVISITED) {
      dfsVisit(neighbor, stack);
    }
  }

  node.state = NODE_STATES.VISITED;
  stack.push(node);
}

function topoSort(node: Node) {
  let stack: Node[] = [];

  dfsVisit(node, stack);

  return stack;
}

export function longestPath(start: Node) {
  let tSort = topoSort(start);
  let longestPath = 0;

  while (tSort.length > 0) {
    let current = tSort.pop()!;
    longestPath = Math.max(longestPath, current.nodeLevel);

    for (let neighbor of current.neighbors) {
      if (current.nodeLevel + 1 > neighbor.nodeLevel) {
        neighbor.nodeLevel = current.nodeLevel + 1;
      }
    }
  }

  return longestPath;
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
  nodeLevel: number;

  constructor(data: number) {
    this.data = data;
    this.neighbors = new Array<Node>();
    this.state = NODE_STATES.UNVISITED;
    this.nodeLevel = 0;
  }
}
