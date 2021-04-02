import { Node, LinkedList } from 'linked-list/append-node';

describe('appendNode', () => {
  test('empty list', () => {
    const list_1 = new LinkedList();

    const actual = list_1;
    const expected = {
      head: null,
      tail: null,
    };

    expect(actual).toEqual(expected);
  });

  test('list with one node', () => {
    const list_1 = new LinkedList();

    const node_1 = new Node(2);

    list_1.appendNode(node_1);

    const actual = list_1;
    const expected = {
      head: { data: 2, next: null },
      tail: { data: 2, next: null },
    };

    expect(actual).toEqual(expected);
  });

  test('list with two nodes', () => {
    const list_1 = new LinkedList();

    const node_1 = new Node(2);
    const node_2 = new Node(1);

    list_1.appendNode(node_1);
    list_1.appendNode(node_2);

    const actual = list_1;
    const expected = {
      head: { data: 2, next: { data: 1, next: null } },
      tail: { data: 1, next: null },
    };

    expect(actual).toEqual(expected);
  });

  test('list with three nodes', () => {
    const list_1 = new LinkedList();

    const node_1 = new Node(2);
    const node_2 = new Node(1);
    const node_3 = new Node(4);

    list_1.appendNode(node_1);
    list_1.appendNode(node_2);
    list_1.appendNode(node_3);

    const actual = list_1;
    const expected = {
      head: {
        data: 2,
        next: {
          data: 1,
          next: {
            data: 4,
            next: null,
          },
        },
      },
      tail: { data: 4, next: null },
    };

    expect(actual).toEqual(expected);
  });
});
