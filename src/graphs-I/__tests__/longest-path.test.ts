import { longestPath, Node } from 'graphs-I/longest-path';

describe('longestPath', () => {
  test('single node', () => {
    const node_1 = new Node(2);

    const actual = longestPath(node_1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('two connected nodes', () => {
    const node_1 = new Node(2);
    const node_2 = new Node(4);

    node_1.neighbors.push(node_2);

    const actual = longestPath(node_1);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('three connected nodes', () => {
    const node_1 = new Node(2);
    const node_2 = new Node(4);
    const node_3 = new Node(5);

    node_1.neighbors.push(node_2);
    node_2.neighbors.push(node_3);

    const actual = longestPath(node_1);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('three connected nodes with multiple paths', () => {
    const node_1 = new Node(2);
    const node_2 = new Node(4);
    const node_3 = new Node(5);
    const node_4 = new Node(6);

    node_1.neighbors.push(node_2);
    node_2.neighbors.push(node_3);
    node_2.neighbors.push(node_4);

    const actual = longestPath(node_1);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('four connected nodes', () => {
    const node_1 = new Node(2);
    const node_2 = new Node(4);
    const node_3 = new Node(5);
    const node_4 = new Node(6);

    node_1.neighbors.push(node_2);
    node_2.neighbors.push(node_3);
    node_3.neighbors.push(node_4);

    const actual = longestPath(node_1);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('four connect nodes with multiple paths', () => {
    const node_1 = new Node(2);
    const node_2 = new Node(4);
    const node_3 = new Node(5);
    const node_4 = new Node(6);
    const node_5 = new Node(7);

    node_1.neighbors.push(node_2);
    node_2.neighbors.push(node_3);
    node_3.neighbors.push(node_4);
    node_3.neighbors.push(node_5);

    const actual = longestPath(node_1);
    const expected = 3;

    expect(actual).toEqual(expected);
  });
});
