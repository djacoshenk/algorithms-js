import { moveZeroesEnd } from 'arrays-and-strings-I/move-zeroes-end';

describe('moveZeroesEnd', () => {
  test('empty array', () => {
    const actual = moveZeroesEnd([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single zero element', () => {
    const actual = moveZeroesEnd([0]);
    const expected = [0];

    expect(actual).toEqual(expected);
  });

  test('single non-zero element', () => {
    const actual = moveZeroesEnd([2]);
    const expected = [2];

    expect(actual).toEqual(expected);
  });

  test('two elements', () => {
    const actual = moveZeroesEnd([0, 2]);
    const expected = [2, 0];

    expect(actual).toEqual(expected);
  });

  test('many elements', () => {
    const actual = moveZeroesEnd([4, 2, 0, 1, 0, 3, 0]);
    const expected = [4, 2, 3, 1, 0, 0, 0];

    expect(actual).toEqual(expected);
  });

  test('many elements zeroes at end', () => {
    const actual = moveZeroesEnd([4, 2, 3, 1, 0, 0, 0]);
    const expected = [4, 2, 3, 1, 0, 0, 0];

    expect(actual).toEqual(expected);
  });
});
