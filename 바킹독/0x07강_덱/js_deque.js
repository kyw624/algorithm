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
    if (this.head > 0) {
      this.data[--this.head] = num;
    } else {
      this.data = [num].concat(this.data.slice(this.head, this.tail));
      this.tail++;
    }
  }

  push_back(num) {
    this.data[this.tail++] = num;
  }

  pop_front() {
    if (this.isEmpty()) return;

    const popNumber = this.data[this.head++];

    return popNumber;
  }

  pop_back() {
    if (this.isEmpty()) return;

    const popNumber = this.data[--this.tail];

    return popNumber;
  }

  front() {
    return this.isEmpty() ? undefined : this.data[this.head];
  }

  back() {
    return this.isEmpty() ? undefined : this.data[this.tail - 1];
  }
}
