class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(x) {
    this.data[this.tail++] = x;
    return this.data;
  }

  pop() {
    if (this.size() > 0) {
      return this.data[this.head++];
    }
  }

  front() {
    if (this.size() > 0) {
      return this.data[this.head];
    }
  }

  back() {
    if (this.size() > 0) {
      return this.data[this.tail - 1];
    }
  }

  size() {
    return this.tail - this.head;
  }
}

const q = new Queue();

q.push(2); // [2]
q.push(4); // [2, 4]
q.push(8); // [2, 4, 8]
q.push(16); // [2, 4, 8, 16]
console.log(q); // { data: [2, 4, 8, 16], head: 0, tail: 4}
q.pop(); // 2
console.log(q); // { data: [2, 4, 8, 16], head: 1, tail: 4}
q.front(); // 4
q.back(); // 16
q.size(); // 3
