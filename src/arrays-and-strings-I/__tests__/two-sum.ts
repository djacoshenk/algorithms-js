import { twoSumArr } from 'arrays-and-strings-I/two-sum';

describe('twoSumArr', () => {
  test('empty array', () => {
    const actual = twoSumArr([], 1);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('one element with sum', () => {
    const actual = twoSumArr([5], 5);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('two elements with sum', () => {
    const actual = twoSumArr([2, 3], 5);
    const expected = [2, 3];

    expect(actual).toEqual(expected);
  });

  test('two elements with no sum', () => {
    const actual = twoSumArr([2, 3], 6);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('two elements with dupes', () => {
    const actual = twoSumArr([2, 2], 4);
    const expected = [2, 2];

    expect(actual).toEqual(expected);
  });

  test('three elements with sum', () => {
    const actual = twoSumArr([2, 3, 4], 7);
    const expected = [3, 4];

    expect(actual).toEqual(expected);
  });

  test('three elements with no sum', () => {
    const actual = twoSumArr([2, 3, 4], 8);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('three elements with dupes', () => {
    const actual = twoSumArr([2, 2, 3], 4);
    const expected = [2, 2];

    expect(actual).toEqual(expected);
  });

  test('four elements with sum', () => {
    const actual = twoSumArr([1, 2, 3, 4], 6);
    const expected = [2, 4];

    expect(actual).toEqual(expected);
  });

  test('four elements with no sum', () => {
    const actual = twoSumArr([1, 2, 3, 4], 8);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('four elements with dupes', () => {
    const actual = twoSumArr([1, 2, 2, 4], 4);
    const expected = [2, 2];

    expect(actual).toEqual(expected);
  });
});
