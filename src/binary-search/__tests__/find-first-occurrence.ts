import { findFirstOccurrence } from 'binary-search/find-first-occurrence';

describe('findFirstOccurrence', () => {
  test('empty array', () => {
    const actual = findFirstOccurrence([], 2);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element equal to target', () => {
    const actual = findFirstOccurrence([2], 2);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('single element not equal to target', () => {
    const actual = findFirstOccurrence([2], 3);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('two duplicate elements equal to target', () => {
    const actual = findFirstOccurrence([2, 2], 2);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('two duplicate elements not equal to target', () => {
    const actual = findFirstOccurrence([2, 2], 3);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('all duplicates', () => {
    const actual = findFirstOccurrence([1, 1, 1, 1, 1], 1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('no duplicates', () => {
    const actual = findFirstOccurrence([2, 3, 4, 5, 6, 7], 5);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('mix duplicates and non-duplicates', () => {
    const actual = findFirstOccurrence([1, 3, 4, 6, 6, 6, 7], 6);
    const expected = 3;

    expect(actual).toEqual(expected);
  });
});
