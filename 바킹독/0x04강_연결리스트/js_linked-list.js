class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 리스트 처음에 노드 삽입
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // 리스트 마지막에 노드 삽입
  insertLast(data) {
    const node = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // 특정 인덱스에 노드 삽입
  insertAt(data, index) {
    if (index > this.size || index < 0) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, prev;

    current = this.head;
    let count = 0;

    while (count < index) {
      prev = current;
      count++;
      current = current.next;
    }

    prev.next = node;
    node.next = current;

    this.size++;
  }

  // 특정 인덱스의 노드를 출력
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (index === count) {
        console.log(current.data);
        return;
      }

      current = current.next;
      count++;
    }
  }

  // 특정 인덱스의 노드 제거
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let current = this.head;
    let prev;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this.size--;
  }

  // 리스트를 초기화
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // 리스트의 데이터들 출력
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.clearList();

ll.printListData(ll);
// ll.getAt(3);

////
// Floyd 알고리즘 예제

// 끝이 null인 연결 리스트
function makeNormalList() {
  const list = new LinkedList();

  for (let i = 1; i <= 8; i++) {
    list.insertLast(i);
  }

  return list;
}

// 사이클이 있는 연결 리스트
function makeCycleList() {
  const list = new LinkedList();

  for (let i = 1; i <= 8; i++) {
    list.insertLast(i);
  }

  let current = list.head;
  let target;

  while (current) {
    if (current.data === 5) {
      target = current;
    }

    if (current.next === null) {
      current.next = target;
      break;
    }

    current = current.next;
  }

  return list;
}

// floyd 알고리즘 예제
function floyd(list) {
  let fast = list.head;
  let slow = list.head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      // 사이클 존재
      return true;
    }
  }

  return false;
}

const normalList = makeNormalList();
const cycleList = makeCycleList();

console.log(floyd(normalList));
console.log(floyd(cycleList));
