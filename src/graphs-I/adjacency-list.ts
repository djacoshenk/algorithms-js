/*

Graph Implementation -  Adjacency List

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

  constructor(data: number) {
    this.data = data;
    this.neighbors = new Array<Node>();
  }
}
