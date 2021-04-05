import { zeroSumSubarray } from 'subarrays/zero-sum-subarray';

describe('zeroSumSubarray', () => {
  test('empty array', () => {
    const actual = zeroSumSubarray([]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single negative element', () => {
    const actual = zeroSumSubarray([-1]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single positive element', () => {
    const actual = zeroSumSubarray([2]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single zero element', () => {
    const actual = [0];
    const expected = [0];

    expect(actual).toEqual(expected);
  });

  test('has zero sum', () => {
    const actual = zeroSumSubarray([2, -1, -3, 1, -1, 1, 2, -1]);
    const expected = [1, -1];

    expect(actual).toEqual(expected);
  });

  test('does not have zero sum', () => {
    const actual = zeroSumSubarray([1, -6, 4, -3, -4, 5, 1]);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('sum at beginning', () => {
    const actual = zeroSumSubarray([2, -2, 1, 3, -4, 0, 5]);
    const expected = [2, -2];

    expect(actual).toEqual(expected);
  });

  test('sum in middle', () => {
    const actual = zeroSumSubarray([2, -1, 4, 2, -2, 1, 3]);
    const expected = [2, -2];

    expect(actual).toEqual(expected);
  });

  test('sum at end', () => {
    const actual = zeroSumSubarray([2, 1, -6, 1, 3, -2, 2]);
    const expected = [-2, 2];

    expect(actual).toEqual(expected);
  });
});
