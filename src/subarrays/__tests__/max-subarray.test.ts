import { maxSubarray } from 'subarrays/max-subarray';

describe('maxSubarray', () => {
  test('single element', () => {
    const actual = maxSubarray([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements non-negative values', () => {
    const actual = maxSubarray([3, 1]);
    const expected = [3, 1];

    expect(actual).toEqual(expected);
  });

  test('two elements with negative values', () => {
    const actual = maxSubarray([-3, -1]);
    const expected = [-1];

    expect(actual).toEqual(expected);
  });

  test('all non-negative values', () => {
    const actual = maxSubarray([4, 1, 3, 2, 1]);
    const expected = [4, 1, 3, 2, 1];

    expect(actual).toEqual(expected);
  });

  test('all negative values', () => {
    const actual = maxSubarray([-4, -1, -3, -2, -1]);
    const expected = [-1];

    expect(actual).toEqual(expected);
  });

  test('mix negative and non-negative values', () => {
    const actual = maxSubarray([-3, 2, -1, 2, 0, 4, -1]);
    const expected = [2, -1, 2, 0, 4];

    expect(actual).toEqual(expected);
  });

  test('all zeroes', () => {
    const actual = maxSubarray([0, 0, 0, 0, 0, 0]);
    const expected = [0];

    expect(actual).toEqual(expected);
  });
});
