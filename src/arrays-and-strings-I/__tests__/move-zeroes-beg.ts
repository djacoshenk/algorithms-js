import { moveZeroesBeg } from 'arrays-and-strings-I/move-zeroes-beg';

describe('moveZeroesBeg', () => {
  test('empty array', () => {
    const actual = moveZeroesBeg([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single zero element', () => {
    const actual = moveZeroesBeg([0]);
    const expected = [0];

    expect(actual).toEqual(expected);
  });

  test('single non-zero element', () => {
    const actual = moveZeroesBeg([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('all zero elements', () => {
    const actual = moveZeroesBeg([0, 0, 0]);
    const expected = [0, 0, 0];

    expect(actual).toEqual(expected);
  });

  test('all non-zero elements', () => {
    const actual = moveZeroesBeg([4, 2, 1, 3]);
    const expected = [4, 2, 1, 3];

    expect(actual).toEqual(expected);
  });

  test('mix of zero and non-zero elements', () => {
    const actual = moveZeroesBeg([4, 2, 0, 1, 0, 3, 0]);
    const expected = [0, 0, 0, 1, 2, 3, 4];

    expect(actual).toEqual(expected);
  });
});
