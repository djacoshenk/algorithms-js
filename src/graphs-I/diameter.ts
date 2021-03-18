/*

Given a directed graph, find the length of the longest path in the graph.
The path can start from any node.

Time Complexity: O(V+E)
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
  longestPath: number;

  constructor(data: number) {
    this.data = data;
    this.neighbors = new Array<Node>();
    this.state = NODE_STATES.UNVISITED;
    this.longestPath = 0;
  }
}

const NODE_STATES = {
  VISITED: 'VISITED',
  UNVISITED: 'UNVISITED',
  VISITING: 'VISITING',
};

export function diameter(start: Node) {
  if (start === null) {
    return 0;
  }

  let tSort = topoSort(start);
  let diameter = 0;

  while (tSort.length > 0) {
    let current = tSort.pop()!;
    diameter = Math.max(diameter, current.longestPath);

    for (let neighbor of current.neighbors) {
      if (current.longestPath + 1 > neighbor.longestPath) {
        neighbor.longestPath = current.longestPath + 1;
      }
    }
  }

  return diameter;
}

export function topoSort(node: Node) {
  let stack = new Array<Node>();

  dfsVisit(node, stack);

  return stack;
}

export function dfsVisit(node: Node, stack: Node[]) {
  node.state = NODE_STATES.VISITING;

  for (let neighbor of node.neighbors) {
    if (neighbor.state === NODE_STATES.UNVISITED) {
      dfsVisit(neighbor, stack);
    }
  }

  node.state = NODE_STATES.VISITED;
  stack.push(node);
}

const GRAPH_1 = new Graph();

const NODE_1 = new Node(1);
const NODE_2 = new Node(2);
const NODE_3 = new Node(3);
const NODE_4 = new Node(4);
const NODE_5 = new Node(5);
const NODE_6 = new Node(6);

GRAPH_1.nodes.push(NODE_1, NODE_2, NODE_3, NODE_4, NODE_5, NODE_6);

NODE_1.neighbors.push(NODE_2);
NODE_1.neighbors.push(NODE_3);
NODE_2.neighbors.push(NODE_4);
NODE_3.neighbors.push(NODE_5);
NODE_4.neighbors.push(NODE_6);
NODE_5.neighbors.push(NODE_6);

console.log(diameter(NODE_1)); // 3
