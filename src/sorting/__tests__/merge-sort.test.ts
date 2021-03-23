import { mergeSort } from 'sorting/merge-sort';

describe('mergeSort', () => {
  test('empty array', () => {
    const actual = mergeSort([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = mergeSort([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements', () => {
    const actual = mergeSort([6, 4]);
    const expected = [4, 6];

    expect(actual).toEqual(expected);
  });

  test('unsorted elements no duplicates', () => {
    const actual = mergeSort([8, 2, 1, 0, 5, 3, 9, 4]);
    const expected = [0, 1, 2, 3, 4, 5, 8, 9];

    expect(actual).toEqual(expected);
  });

  test('unsorted elements with duplicates', () => {
    const actual = mergeSort([8, 6, 2, 1, 1, 0, 2, 4, 5, 6]);
    const expected = [0, 1, 1, 2, 2, 4, 5, 6, 6, 8];

    expect(actual).toEqual(expected);
  });
});
