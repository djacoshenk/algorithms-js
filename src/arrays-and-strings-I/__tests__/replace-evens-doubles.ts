import { replaceEvensDoubles } from 'arrays-and-strings-I/replace-evens-doubles';

describe('replaceEvensDoubles', () => {
  test('empty array', () => {
    const actual = replaceEvensDoubles([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('one odd number', () => {
    const actual = replaceEvensDoubles([3]);
    const expected = [3];

    expect(actual).toEqual(expected);
  });

  test('one even number', () => {
    const actual = replaceEvensDoubles([2, -1]);
    const expected = [2, 2];

    expect(actual).toEqual(expected);
  });

  test('only odd numbers', () => {
    const actual = replaceEvensDoubles([1, 3, 5, 7]);
    const expected = [1, 3, 5, 7];

    expect(actual).toEqual(expected);
  });

  test('only even numbers', () => {
    const actual = replaceEvensDoubles([2, 4, 6, 8, -1, -1, -1, -1]);
    const expected = [2, 2, 4, 4, 6, 6, 8, 8];

    expect(actual).toEqual(expected);
  });

  test('odd and even numbers', () => {
    const actual = replaceEvensDoubles([1, 2, 5, 6, 8, -1, -1, -1]);
    const expected = [1, 2, 2, 5, 6, 6, 8, 8];

    expect(actual).toEqual(expected);
  });
});
