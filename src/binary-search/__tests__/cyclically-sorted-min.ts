import { cyclicallySortedMin } from 'binary-search/cyclically-sorted-min';

describe('cyclicallySortedMin', () => {
  test('empty array', () => {
    const actual = cyclicallySortedMin([]);
    const expected = -1;

    expect(actual).toEqual(expected);
  });

  test('single element', () => {
    const actual = cyclicallySortedMin([2]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('two elements rotated', () => {
    const actual = cyclicallySortedMin([4, 2]);
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  test('two elements not rotated', () => {
    const actual = cyclicallySortedMin([2, 4]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('many elements rotated', () => {
    const actual = cyclicallySortedMin([4, 5, 1, 2, 3]);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('many elements not rotated', () => {
    const actual = cyclicallySortedMin([1, 2, 3, 4, 5]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});
