import { hasOverlap, Interval } from 'line-sweep/has-overlap';

describe('hasOverlap', () => {
  test('single interval', () => {
    const interval_1 = new Interval(1, 3);

    const intervals = [interval_1];

    const actual = hasOverlap(intervals);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('two intervals with no overlap', () => {
    const interval_1 = new Interval(1, 3);
    const interval_2 = new Interval(3, 4);

    const intervals = [interval_1, interval_2];

    const actual = hasOverlap(intervals);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('two intervals with overlap', () => {
    const interval_1 = new Interval(1, 3);
    const interval_2 = new Interval(2, 4);

    const intervals = [interval_1, interval_2];

    const actual = hasOverlap(intervals);
    const expected = true;

    expect(actual).toEqual(expected);
  });

  test('three invtervals with no overlap', () => {
    const interval_1 = new Interval(1, 3);
    const interval_2 = new Interval(3, 4);
    const interval_3 = new Interval(5, 7);

    const intervals = [interval_1, interval_2, interval_3];

    const actual = hasOverlap(intervals);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  test('three intervals with overlap', () => {
    const interval_1 = new Interval(1, 3);
    const interval_2 = new Interval(3, 5);
    const interval_3 = new Interval(4, 6);

    const intervals = [interval_1, interval_2, interval_3];

    const actual = hasOverlap(intervals);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
