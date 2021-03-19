/*

Given a list of intervals, merge all overlapping intervals. At the end of the merge, there should be no overlapping intervals.

For example:
Input = ​(1,3), (3,5), (6,8), (7,9)
Output = ​(1,5), (6,9)

*/

export class Point {
  time: number;
  isStart: boolean;

  constructor(time: number, isStart: boolean) {
    this.time = time;
    this.isStart = isStart;
  }
}

export class Interval {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export function mergeIntervals(intervals: Interval[]) {
  let points = new Array<Point>();

  // turn intervals into points
  for (let interval of intervals) {
    points.push(new Point(interval.start, true));
    points.push(new Point(interval.end, false));
  }

  // sort points
  points.sort((a, b) => a.time - b.time);

  let result = new Array<Interval>();

  let numIntervals = 0;
  let startPoint: Point | null = null;

  // loop through points
  for (let point of points) {
    if (point.isStart) {
      numIntervals++;

      if (numIntervals === 1) {
        startPoint = point;
      }
    } else {
      numIntervals--;

      if (numIntervals === 0) {
        result.push(new Interval(startPoint!.time, point.time));
      }
    }
  }

  return result;
}

const INTERVAL_1 = new Interval(1, 3);
const INTERVAL_2 = new Interval(3, 5);
const INTERVAL_3 = new Interval(6, 8);
const INTERVAL_4 = new Interval(7, 9);

const INTERVALS_1 = [INTERVAL_1, INTERVAL_2, INTERVAL_3, INTERVAL_4];

console.log(mergeIntervals(INTERVALS_1));
