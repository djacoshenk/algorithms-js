import { oneTrade } from 'arrays-and-strings-II/one-trade';

describe('oneTrade', () => {
  test('single element', () => {
    const actual = oneTrade([2]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('two elements increasing value', () => {
    const actual = oneTrade([1, 3]);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  test('two elements decreasing value', () => {
    const actual = oneTrade([3, 1]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('two elements duplicates', () => {
    const actual = oneTrade([3, 3]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('five elements increasing value', () => {
    const actual = oneTrade([2, 3, 5, 6, 8]);
    const expected = 6;

    expect(actual).toEqual(expected);
  });

  test('five elements decreasing value', () => {
    const actual = oneTrade([8, 6, 5, 3, 2]);
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  test('five elements increasing and decreasing value', () => {
    const actual = oneTrade([2, 8, 3, 5, 10]);
    const expected = 8;

    expect(actual).toEqual(expected);
  });
});
