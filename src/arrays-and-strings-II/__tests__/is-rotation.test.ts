import { isRotation } from 'arrays-and-strings-II/is-rotation';

describe('isRotation', () => {
  test('single letter', () => {
    const actual = isRotation('a', 'a');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('two letters rotation', () => {
    const actual = isRotation('ab', 'ba');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('two letters non-rotation', () => {
    const actual = isRotation('ab', 'bc');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('non-matching string lengths', () => {
    const actual = isRotation('canada', 'can');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('normal case non-rotation', () => {
    const actual = isRotation('canada', 'canary');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('normal case rotation', () => {
    const actual = isRotation('canada', 'dacana');
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
