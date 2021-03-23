import { dfs, Graph, Node } from 'graphs-I/dfs';

describe('depth first search (dfs)', () => {
  test('empty graph', () => {
    const graph = new Graph();

    const actual = dfs(graph, 1);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('graph with one node', () => {
    const graph = new Graph();

    const node_1 = new Node(1);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 1);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('graph with two nodes', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    node_1.neighbors.push(node_2);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 2);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('graph with two disconnected nodes', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    graph.nodes.push(node_1, node_2);

    const actual = dfs(graph, 2);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('target in graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 4);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('target not in graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 7);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('target first element in graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 1);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('target deep in graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_4);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const actual = dfs(graph, 5);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
