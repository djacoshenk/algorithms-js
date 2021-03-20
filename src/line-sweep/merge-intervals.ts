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
  let points: Point[] = [];

  // turn intervals into points
  for (let interval of intervals) {
    points.push(new Point(interval.start, true));
    points.push(new Point(interval.end, false));
  }

  // sort points
  points.sort((a, b) => a.time - b.time);

  let result: Interval[] = [];

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
