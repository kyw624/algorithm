class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  top() {
    if (this.size > 0) {
      return this.data[this.size - 1];
    }
  }

  push(data) {
    this.data[this.size++] = data;
    return this.data;
  }

  pop() {
    if (this.size > 0) {
      return this.data[this.size-- - 1];
    }
  }

  size() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? true : false;
  }
}

const st = new Stack();

console.log(st); // { data: [], size: 0 }
st.push(2); // { data: [ 2 ], size: 1 }
st.push(22); // { data: [ 2, 22 ], size: 2 }
st.push(222); // { data: [ 2, 22, 222 ], size: 3 }
st.top(); // 222
st.pop(); // 222 { data: [2, 22, 222], size: 2 }
st.top(); // 22
st.push(1000); // { data: [ 2, 22, 1000 ], size: 3 }
st.empty(); // false
