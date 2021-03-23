import { reverseWords } from 'arrays-and-strings-I/reverse-words';

describe('reverseWords', () => {
  test('empty string', () => {
    const actual = reverseWords('');
    const expected = '';

    expect(actual).toEqual(expected);
  });

  test('single letter', () => {
    const actual = reverseWords('a');
    const expected = 'a';

    expect(actual).toEqual(expected);
  });

  test('single space', () => {
    const actual = reverseWords(' ');
    const expected = ' ';

    expect(actual).toEqual(expected);
  });

  test('begins with space', () => {
    const actual = reverseWords(' hello');
    const expected = 'hello ';

    expect(actual).toEqual(expected);
  });

  test('ends with space', () => {
    const actual = reverseWords('hello ');
    const expected = ' hello';

    expect(actual).toEqual(expected);
  });

  test('one word', () => {
    const actual = reverseWords('world');
    const expected = 'world';

    expect(actual).toEqual(expected);
  });

  test('two words', () => {
    const actual = reverseWords('hello world');
    const expected = 'world hello';

    expect(actual).toEqual(expected);
  });

  test('five words', () => {
    const actual = reverseWords('I live in a house');
    const expected = 'house a in live I';

    expect(actual).toEqual(expected);
  });
});
