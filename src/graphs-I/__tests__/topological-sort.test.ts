import { topoSort, Graph, Node, Stack } from 'graphs-I/topological-sort';

describe('topoSort', () => {
  test('empty graph', () => {
    const graph = new Graph();

    const actual = topoSort(graph);
    const expected = new Stack();

    expect(actual).toEqual(expected);
  });

  test('single node graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);

    graph.nodes.push(node_1);

    const stack = new Stack();

    stack.push(node_1);

    const actual = topoSort(graph);
    const expected = stack;

    expect(actual).toEqual(expected);
  });

  test('two node graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    node_1.neighbors.push(node_2);

    graph.nodes.push(node_1);

    const stack = new Stack();

    stack.push(node_2);
    stack.push(node_1);

    const actual = topoSort(graph);
    const expected = stack;

    expect(actual).toEqual(expected);
  });

  test('two unconnected node graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);

    graph.nodes.push(node_1, node_2);

    const stack = new Stack();

    stack.push(node_1);
    stack.push(node_2);

    const actual = topoSort(graph);
    const expected = stack;

    expect(actual).toEqual(expected);
  });

  test('multiple node graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);

    node_1.neighbors.push(node_2, node_4);
    node_2.neighbors.push(node_3, node_4, node_5);
    node_3.neighbors.push(node_5);

    graph.nodes.push(node_1);

    const stack = new Stack();

    stack.push(node_5);
    stack.push(node_3);
    stack.push(node_4);
    stack.push(node_2);
    stack.push(node_1);

    const actual = topoSort(graph);
    const expected = stack;

    expect(actual).toEqual(expected);
  });

  test('multiple connected component graph', () => {
    const graph = new Graph();

    const node_1 = new Node(1);
    const node_2 = new Node(2);
    const node_3 = new Node(3);
    const node_4 = new Node(4);
    const node_5 = new Node(5);
    const node_6 = new Node(6);

    node_1.neighbors.push(node_2, node_3);
    node_2.neighbors.push(node_3, node_4, node_5);
    node_3.neighbors.push(node_4, node_5);
    node_4.neighbors.push(node_6);
    node_5.neighbors.push(node_6);

    graph.nodes.push(node_1);

    const stack = new Stack();

    stack.push(node_6);
    stack.push(node_4);
    stack.push(node_5);
    stack.push(node_3);
    stack.push(node_2);
    stack.push(node_1);

    const actual = topoSort(graph);
    const expected = stack;

    expect(actual).toEqual(expected);
  });
});
