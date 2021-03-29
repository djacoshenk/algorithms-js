import { insertionSortList, Node } from 'linked-list/insertion-sort';

describe('insertionSortList', () => {
  test('single node', () => {
    const node_1 = new Node(2);

    const actual = insertionSortList(node_1);
    const expected = { data: 2, next: null };

    expect(actual).toEqual(expected);
  });

  test('two nodes', () => {
    const node_2 = new Node(3);
    const node_1 = new Node(2, node_2);

    const actual = insertionSortList(node_1);
    const expected = {
      data: 2,
      next: {
        data: 3,
        next: null,
      },
    };

    expect(actual).toEqual(expected);
  });

  test('three nodes with duplicates', () => {
    const node_3 = new Node(3);
    const node_2 = new Node(1, node_3);
    const node_1 = new Node(3, node_2);

    const actual = insertionSortList(node_1);
    const expected = {
      data: 1,
      next: {
        data: 3,
        next: {
          data: 3,
          next: null,
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  test('three nodes no duplicates', () => {
    const node_3 = new Node(4);
    const node_2 = new Node(3, node_3);
    const node_1 = new Node(5, node_2);

    const actual = insertionSortList(node_1);
    const expected = {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: null,
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  test('five nodes with duplicates', () => {
    const node_5 = new Node(4);
    const node_4 = new Node(1, node_5);
    const node_3 = new Node(5, node_4);
    const node_2 = new Node(3, node_3);
    const node_1 = new Node(5, node_2);

    const actual = insertionSortList(node_1);
    const expected = {
      data: 1,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 5,
              next: null,
            },
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  test.only('five nodes no duplicates', () => {
    const node_5 = new Node(3);
    const node_4 = new Node(2, node_5);
    const node_3 = new Node(5, node_4);
    const node_2 = new Node(1, node_3);
    const node_1 = new Node(4, node_2);

    const actual = insertionSortList(node_1);
    const expected = {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: {
              data: 5,
              next: null,
            },
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });
});
