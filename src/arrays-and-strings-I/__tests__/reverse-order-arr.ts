import { reverseOrderArr } from 'arrays-and-strings-I/reverse-order-arr';

describe('reverseOrderArr', () => {
  test('empty array', () => {
    const actual = reverseOrderArr([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = reverseOrderArr([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements', () => {
    const actual = reverseOrderArr([2, 3]);
    const expected = [3, 2];

    expect(actual).toEqual(expected);
  });

  test('three elements', () => {
    const actual = reverseOrderArr([2, 3, 4]);
    const expected = [4, 3, 2];

    expect(actual).toEqual(expected);
  });

  test('odd elements', () => {
    const actual = reverseOrderArr([3, 5, 7, 9, 11]);
    const expected = [11, 9, 7, 5, 3];

    expect(actual).toEqual(expected);
  });

  test('even elements', () => {
    const actual = reverseOrderArr([2, 4, 6, 8]);
    const expected = [8, 6, 4, 2];

    expect(actual).toEqual(expected);
  });
});
