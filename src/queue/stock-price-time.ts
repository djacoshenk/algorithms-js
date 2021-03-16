/*

You are given stock prices and the corresponding day of each stock price.

For example:
(32, 1), (45, 1), (37,2), (42,3), ..

Here, 32 is the price and 1 is the day of the price.Say you are given these prices as an input stream. 
You should provide a function forthe user to input a stock price and day. 
Your system should be able to tellthe maximum stock price in the last 3 days.

*/

export class Queue {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor(head: Node | null = null, tail: Node | null = null) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  enqueue(data: number) {
    const toAdd = new Node(data);

    if (!this.head) {
      this.head = toAdd;
      this.tail = toAdd;
    } else {
      toAdd.next = this.head;
      this.head = toAdd;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      const data = this.head.data;
      this.head = this.head.next;
      this.length--;
      return data;
    }
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return null;
    }
  }
}

export class Node {
  data: number;
  next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class Price {
  price: number;
  day: number;

  constructor(price: number, day: number) {
    this.price = price;
    this.day = day;
  }

  getPrice() {
    return this.price;
  }

  getDay() {
    return this.day;
  }
}

export class StockPriceWithTime {
  queue: Queue;
  window: number;

  constructor(windowDays: number) {
    this.queue = new Queue();
    this.window = windowDays;
  }
}
