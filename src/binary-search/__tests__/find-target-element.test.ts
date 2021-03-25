import { findTargetElement } from 'binary-search/find-target-element';

describe('findTargetElement', () => {
  test('empty array', () => {
    const actual = findTargetElement([], 1);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element with match', () => {
    const actual = findTargetElement([1], 1);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('single element with no match', () => {
    const actual = findTargetElement([1], 2);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('two element with match', () => {
    const actual = findTargetElement([2, 3], 3);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('two elements with no match', () => {
    const actual = findTargetElement([2, 3], 4);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('odd number of elements', () => {
    const actual = findTargetElement([2, 3, 4, 5, 7], 3);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('even number of elements', () => {
    const actual = findTargetElement([2, 3, 4, 5, 7, 8], 5);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('target at beginning of array', () => {
    const actual = findTargetElement([2, 3, 4, 5, 7, 8], 2);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('target at end of array', () => {
    const actual = findTargetElement([2, 3, 4, 5, 7, 8], 8);
    const expected = 5;

    expect(actual).toEqual(expected);
  });
});
