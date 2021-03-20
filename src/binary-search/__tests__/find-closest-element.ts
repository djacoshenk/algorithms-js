import { findClosestElement } from 'binary-search/find-closest-element';

describe('findClosestElement', () => {
  test('empty array', () => {
    const actual = findClosestElement([], 2);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element equal to target', () => {
    const actual = findClosestElement([2], 2);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('single element not equal to target', () => {
    const actual = findClosestElement([2], 4);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('many elements equal to target', () => {
    const actual = findClosestElement([2, 3, 4, 5, 6], 4);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('many elements not equal to target', () => {
    const actual = findClosestElement([1, 2, 4, 5, 7, 8, 9], 6);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('many elements closer element at beginning', () => {
    const actual = findClosestElement([1, 2, 4, 5, 7, 8, 9], 1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('many elements closer element at end', () => {
    const actual = findClosestElement([1, 2, 4, 5, 7, 8, 9], 9);
    const expected = 6;

    expect(actual).toEqual(expected);
  });
});
