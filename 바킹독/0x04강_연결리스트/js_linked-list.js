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
