import { dutchFlagArrPartition } from 'arrays-and-strings-I/dutch-flag-arr-partition';

describe('dutchFlagArrPartition', () => {
  test('empty array', () => {
    const actual = dutchFlagArrPartition([], 2);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('pivot not in array', () => {
    const actual = dutchFlagArrPartition([3, 2, 4, 4, 6, 4, 4, 3], 5);
    const expected = [3, 2, 4, 4, 3, 4, 4, 6];

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = dutchFlagArrPartition([2], 2);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements', () => {
    const actual = dutchFlagArrPartition([4, 2], 4);
    const expected = [2, 4];

    expect(actual).toEqual(expected);
  });

  test('single element in pivot', () => {
    const actual = dutchFlagArrPartition([5, 4, 2, 2, 6, 6, 5, 3], 4);
    const expected = [3, 2, 2, 4, 6, 5, 6, 5];

    expect(actual).toEqual(expected);
  });

  test('multiple pivots', () => {
    const actual = dutchFlagArrPartition([5, 2, 4, 4, 6, 4, 4, 3], 4);
    const expected = [3, 2, 4, 4, 4, 4, 6, 5];

    expect(actual).toEqual(expected);
  });

  test('pivot is min element', () => {
    const actual = dutchFlagArrPartition([5, 2, 4, 4, 6, 4, 4, 3], 2);
    const expected = [2, 4, 4, 6, 4, 4, 3, 5];

    expect(actual).toEqual(expected);
  });

  test('pivot is max element', () => {
    const actual = dutchFlagArrPartition([5, 2, 4, 4, 6, 4, 4, 3], 6);
    const expected = [5, 2, 4, 4, 4, 4, 3, 6];

    expect(actual).toEqual(expected);
  });
});
