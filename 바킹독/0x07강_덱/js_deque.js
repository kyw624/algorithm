class Deque {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tail - this.head;
  }

  push_front(num) {
    this.data = [num].concat(this.data.slice(this.head, this.tail++));
  }

  push_back(num) {
    this.data[this.tail++] = num;
  }

  pop_front() {
    this.data = this.data.slice(this.head + 1, this.tail--);
  }

  pop_back() {
    this.data = this.data.slice(this.head, --this.tail);
  }

  front() {
    return this.data[this.head];
  }

  back() {
    return this.data[this.tail - 1];
  }

  test() {
    this.push_front(3); // { data: [ 3 ], head: 0, tail: 1 }
    console.log(dq);

    this.push_front(10); // { data: [ 10, 3 ], head: 0, tail: 2 }
    console.log(dq);

    this.push_back(5); // { data: [ 10, 3, 5 ], head: 0, tail: 3 }
    console.log(dq);

    this.push_front(4); // { data: [ 4, 10, 3, 5 ], head: 0, tail: 4 }
    console.log(dq);

    this.pop_front(); // { data: [ 10, 3, 5 ], head: 0, tail: 3 }
    console.log(dq);

    this.push_back(50); // { data: [ 10, 3, 5, 50 ], head: 0, tail: 4 }
    console.log(dq);

    this.pop_back(); // { data: [ 10, 3, 5 ], head: 0, tail: 3 }
    console.log(dq);

    this.back(); // 5
    console.log(this.back());

    this.front(); // 10
    console.log(this.front());

    this.pop_back(); // Deque { data: [ 10, 3 ], head: 0, tail: 2 }
    console.log(dq);

    this.back(); // 3
    console.log(this.back());

    this.pop_front(); // Deque { data: [ 3 ], head: 0, tail: 1 }
    console.log(dq);

    this.front(); // 3
    console.log(this.front());

    console.log("Result:", dq); // { data: [ 3 ], head: 0, tail: 1 }
  }
}
