import { slidingWindow } from 'subarrays/sliding-window';

describe('slidingWindow', () => {
  test('empty array', () => {
    const actual = slidingWindow([], 2);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single element less than target', () => {
    const actual = slidingWindow([2], 4);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single element more than target', () => {
    const actual = slidingWindow([4], 2);
    const expected = null;

    expect(actual).toEqual(expected);
  });

  test('single element equal to target', () => {
    const actual = slidingWindow([2], 2);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements equal to target', () => {
    const actual = slidingWindow([2, 3], 5);
    const expected = [2, 3];

    expect(actual).toEqual(expected);
  });

  test('five elements with sum equal to target', () => {
    const actual = slidingWindow([6, 3, 5, 4, 1], 12);
    const expected = [3, 5, 4];

    expect(actual).toEqual(expected);
  });
});
