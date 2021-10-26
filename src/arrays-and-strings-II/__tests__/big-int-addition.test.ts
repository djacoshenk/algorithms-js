import { bigIntAddition } from 'arrays-and-strings-II/big-int-addition';

describe('bigIntAddition', () => {
  test('first input is []', () => {
    const actual = bigIntAddition([], [1, 2, 3]);
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('second input is []', () => {
    const actual = bigIntAddition([1, 2, 3], []);
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('both inputs are []', () => {
    const actual = bigIntAddition([], []);
    const expected = [] as number[];

    expect(actual).toEqual(expected);
  });

  test('first input is [0]', () => {
    const actual = bigIntAddition([0], [1, 2, 3]);
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('second input is [0]', () => {
    const actual = bigIntAddition([1, 2, 3], [0]);
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('both inputs are [0', () => {
    const actual = bigIntAddition([0], [0]);
    const expected = [0];

    expect(actual).toEqual(expected);
  });

  test('first input is larger than second', () => {
    const actual = bigIntAddition([4, 5, 6, 7], [1, 2, 3]);
    const expected = [4, 6, 9, 0];

    expect(actual).toEqual(expected);
  });

  test('second input is larger than first', () => {
    const actual = bigIntAddition([1, 2, 3], [4, 5, 6, 7]);
    const expected = [4, 6, 9, 0];

    expect(actual).toEqual(expected);
  });

  test('inputs are equal length', () => {
    const actual = bigIntAddition([1, 2, 3], [1, 2, 3]);
    const expected = [2, 4, 6];

    expect(actual).toEqual(expected);
  });

  test('both iputs are [9, 9, 9]', () => {
    const actual = bigIntAddition([9, 9, 9], [9, 9, 9]);
    const expected = [1, 9, 9, 8];

    expect(actual).toEqual(expected);
  });

  test('first input is [9, 9, 9] and second input is [1]', () => {
    const actual = bigIntAddition([9, 9, 9], [1]);
    const expected = [1, 0, 0, 0];

    expect(actual).toEqual(expected);
  });
});
