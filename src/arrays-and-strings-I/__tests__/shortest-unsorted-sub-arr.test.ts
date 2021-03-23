import { shortestUnsortedSubArr } from 'arrays-and-strings-I/shortest-unsorted-sub-arr';

describe('shortestUnsortedSubArr', () => {
  test('empty array', () => {
    const actual = shortestUnsortedSubArr([]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = shortestUnsortedSubArr([1]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('two sorted elelements', () => {
    const actual = shortestUnsortedSubArr([2, 4]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('two unsorted elements', () => {
    const actual = shortestUnsortedSubArr([4, 2]);
    const expected = [4, 2];

    expect(actual).toEqual(expected);
  });

  test('sorted array', () => {
    const actual = shortestUnsortedSubArr([1, 2, 3, 4]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('unsorted at beginning', () => {
    const actual = shortestUnsortedSubArr([4, 3, 2, 1, 5, 6, 7, 8]);
    const expected = [4, 3, 2, 1];

    expect(actual).toEqual(expected);
  });

  test('unsorted in middle', () => {
    const actual = shortestUnsortedSubArr([1, 2, 5, 4, 3, 6, 7, 8]);
    const expected = [5, 4, 3];

    expect(actual).toEqual(expected);
  });

  test('unsorted at end', () => {
    const actual = shortestUnsortedSubArr([1, 2, 3, 4, 5, 9, 8, 7]);
    const expected = [9, 8, 7];

    expect(actual).toEqual(expected);
  });
});
