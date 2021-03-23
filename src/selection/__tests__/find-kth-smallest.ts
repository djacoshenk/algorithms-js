import { findKthElement } from 'selection/find-kth-smallest';

describe('findKthElement', () => {
  test('empty array', () => {
    const actual = findKthElement([], 2);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = findKthElement([1], 1);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('two element no duplicates', () => {
    const actual = findKthElement([3, 2], 2);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('two elements duplicates', () => {
    const actual = findKthElement([3, 3], 2);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('k is at beginning of array', () => {
    const actual = findKthElement([8, 0, 1, 1, 6, 4, 4, 5, 2], 1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('k is at end of array', () => {
    const actual = findKthElement([8, 0, 1, 1, 6, 4, 4, 5, 2], 5);
    const expected = 4;

    expect(actual).toEqual(expected);
  });

  test('k is in middle of array', () => {
    const actual = findKthElement([8, 0, 1, 1, 6, 4, 4, 5, 2], 9);
    const expected = 8;

    expect(actual).toEqual(expected);
  });
});
