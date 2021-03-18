/*

Given a graph and a target number T, find T exists in the graph.

Time Complexity: O(V + E)
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

export function bfs(graph: Graph, target: number) {
  for (let node of graph.nodes) {
    if (node.state === NODE_STATES.UNVISITED && bfsVisit(node, target)) {
      return true;
    }
  }

  return false;
}

export function bfsVisit(start: Node, target: number) {
  let queue = new Array<Node>();
  queue.push(start);
  start.state = NODE_STATES.VISITING;

  while (queue.length > 0) {
    let current = queue.pop()!;

    if (current.data === target) {
      return true;
    }

    for (let neighbor of current.neighbors) {
      if (neighbor.state === NODE_STATES.UNVISITED) {
        queue.push(neighbor);
        neighbor.state = NODE_STATES.VISITING;
      }
    }

    current.state = NODE_STATES.VISITED;
  }

  return false;
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

console.log(GRAPH_1);

console.log(bfs(GRAPH_1, 5)); // true
console.log(bfs(GRAPH_1, 7)); // false
