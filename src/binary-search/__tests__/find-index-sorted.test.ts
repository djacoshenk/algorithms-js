import { findIndexSorted } from 'binary-search/find-index-sorted';

describe('findIndexSorted', () => {
  test('empty array', () => {
    const actual = findIndexSorted([], 2);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element equal to target', () => {
    const actual = findIndexSorted([2], 2);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('single element greater than target', () => {
    const actual = findIndexSorted([2], 1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('single element less than target', () => {
    const actual = findIndexSorted([2], 3);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('many elements no duplicates equal to target', () => {
    const actual = findIndexSorted([1, 2, 3, 4, 5], 3);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('many elements with duplicates equal to target', () => {
    const actual = findIndexSorted([1, 2, 4, 4, 5, 6, 8], 4);
    const expected = 4;

    expect(actual).toEqual(expected);
  });

  test('many elements not equal to target', () => {
    const actual = findIndexSorted([1, 2, 4, 4, 5, 6, 8], 3);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('all elements smaller than target', () => {
    const actual = findIndexSorted([1, 2, 4, 4, 5, 6, 8], 9);
    const expected = 7;

    expect(actual).toEqual(expected);
  });

  test('all elements greater than target', () => {
    const actual = findIndexSorted([1, 2, 4, 4, 5, 6, 8], 0);
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
