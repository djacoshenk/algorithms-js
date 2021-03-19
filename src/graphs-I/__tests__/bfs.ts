import { bfs, Graph, Node } from 'graphs-I/bfs';

describe('breadth first search (bfs)', () => {
  test('empty graph', () => {
    const graph = new Graph();

    const actual = bfs(graph, 1);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('single node', () => {
    const graph = new Graph();

    const node_1 = new Node(1);

    graph.nodes.push(node_1);

    const actual = bfs(graph, 1);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('two nodes', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    node_1.neighbors.push(node_2);

    graph.nodes.push(node_1);

    const actual = bfs(graph, 2);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('two unconnected nodes', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    graph.nodes.push(node_1, node_2);

    const actual = bfs(graph, 2);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('target present', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = bfs(graph, 5);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('target not present', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = bfs(graph, 7);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('multiple connected components', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);
    const node_7 = new Node(7);
    const node_8 = new Node(8);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);
    node_7.neighbors.push(node_8);

    graph.nodes.push(node_1, node_7);

    const actual = bfs(graph, 8);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
