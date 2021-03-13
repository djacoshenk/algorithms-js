/*

Use an array to implement 2 stacks.

Time Complexity: O(1) for both push() and pop()
Space Complexity: ​O(1) - no extra space used apart from the array.

*/

export class ArrayStack {
  a: number[];
  s1: number;
  s2: number;

  constructor(arraySize: number) {
    this.a = new Array(arraySize);
    this.s1 = 0;
    this.s2 = this.a.length - 1;
  }

  push(stackNumber: number, item: number) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error('Invalid stack number');
    }

    if (this.s1 > this.s2) {
      throw new Error('Stack full');
    }

    if (stackNumber === 1) {
      this.a[this.s1++] = item;
    } else {
      this.a[this.s2--] = item;
    }
  }

  pop(stackNumber: number) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error('Invalid stack number');
    }

    if (stackNumber === 1 && this.s1 > 0) {
      return this.a[this.s1--];
    } else if (stackNumber === 2 && this.s2 < this.a.length - 1) {
      return this.a[this.s2++];
    } else {
      throw new Error('Stack empty');
    }
  }
}
