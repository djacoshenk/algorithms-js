/*

Given a graph and a target number T, find T exists in the graph.

Time Complexity: O(V + E), where V is Vertices, and E is Edges
Space Complexity: O(V) in worse case

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

console.log(dfs(GRAPH_1, 5)); // true
console.log(dfs(GRAPH_1, 7)); // false
