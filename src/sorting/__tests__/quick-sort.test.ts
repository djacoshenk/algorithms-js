import { quickSort } from 'sorting/quick-sort';

describe('quickSort', () => {
  test('empty array', () => {
    const actual = quickSort([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = quickSort([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements', () => {
    const actual = quickSort([4, 2]);
    const expected = [2, 4];

    expect(actual).toEqual(expected);
  });

  test('even number of elements', () => {
    const actual = quickSort([7, 0, 3, 2, 6, 1, 5, 4]);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7];

    expect(actual).toEqual(expected);
  });

  test('odd number of elements', () => {
    const actual = quickSort([7, 0, 3, 8, 2, 6, 1, 5, 4]);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    expect(actual).toEqual(expected);
  });
});
