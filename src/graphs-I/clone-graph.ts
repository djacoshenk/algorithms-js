/*

Given a directed graph, make a copy.

Time Complexity:​ O(V+E)
Space Complexity:​ O(V+E)

*/

export function cloneGraph(root: Node) {
  let map = new Map<Node, Node>();
  let rootCopy = new Node(root.data);
  map.set(root, rootCopy);
  dfsVisit(root, map);

  return rootCopy;
}

function dfsVisit(root: Node, map: Map<Node, Node>) {
  root.state = NODE_STATES.VISITING;

  for (let neighbor of root.neighbors) {
    // if neighbor doesn't exist in cloned graph, add it
    if (!map.has(neighbor)) {
      map.set(neighbor, new Node(neighbor.data));
    }

    // add connection in cloned graph
    let rootCopy = map.get(root)!;
    let neighborCopy = map.get(neighbor)!;
    rootCopy.neighbors.push(neighborCopy);

    if (neighbor.state === NODE_STATES.UNVISITED) {
      dfsVisit(neighbor, map);
    }

    root.state = NODE_STATES.VISITED;
  }
}

const NODE_STATES = {
  VISITED: 'VISITED',
  VISITING: 'VISITING',
  UNVISITED: 'UNVISITED',
};

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
