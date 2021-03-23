import { sortSquaresArr } from 'arrays-and-strings-I/sort-squares-arr';

describe('sortSquaresArr', () => {
  test('empty array', () => {
    const actual = sortSquaresArr([]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test('single negative elememt', () => {
    const actual = sortSquaresArr([-2]);
    const expected = [4];

    expect(actual).toEqual(expected);
  });

  test('single positive element', () => {
    const actual = sortSquaresArr([4]);
    const expected = [16];

    expect(actual).toEqual(expected);
  });

  test('only negative elements', () => {
    const actual = sortSquaresArr([-4, -3, -2, -1]);
    const expected = [1, 4, 9, 16];

    expect(actual).toEqual(expected);
  });

  test('only positive elements', () => {
    const actual = sortSquaresArr([2, 3, 4, 5]);
    const expected = [4, 9, 16, 25];

    expect(actual).toEqual(expected);
  });

  test('both negative and positive elements', () => {
    const actual = sortSquaresArr([-4, -2, -1, 0, 3, 5, 6]);
    const expected = [0, 1, 4, 9, 16, 25, 36];

    expect(actual).toEqual(expected);
  });
});
