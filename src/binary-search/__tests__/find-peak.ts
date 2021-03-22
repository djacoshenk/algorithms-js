import { findPeak } from 'binary-search/find-peak';

describe('findPeak', () => {
  test('empty array', () => {
    const actual = findPeak([]);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = findPeak([4]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('peak in the middle', () => {
    const actual = findPeak([1, 2, 3, 4, 3, 2, 1]);
    const expected = 3;

    expect(actual).toEqual(expected);
  });

  test('peak at beginning', () => {
    const actual = findPeak([7, 6, 5, 4, 3, 2, 1]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('peak at end', () => {
    const actual = findPeak([1, 2, 3, 4, 5, 6, 7]);
    const expected = 6;

    expect(actual).toEqual(expected);
  });
});
