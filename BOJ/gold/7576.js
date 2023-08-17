const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [[M, N], ...board] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

////
// Queue 자료구조 구현 풀이
//
const solution = (N, M, tomatoes) => {
  class Queue {
    constructor() {
      this.data = [];
      this.head = 0;
      this.tail = 0;
    }

    enqueue(x) {
      this.data[this.tail++] = x;
    }

    dequeue() {
      if (!this.empty()) return this.data[this.head++];
    }

    size() {
      return this.tail - this.head;
    }

    empty() {
      return this.tail === this.head;
    }
  }

  const count = Array.from({ length: N }, () => Array(M).fill(-1));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const queue = new Queue();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatoes[i][j] === 1) {
        queue.enqueue([i, j]);
        count[i][j] = 0;
      } else if (tomatoes[i][j] !== 0) {
        count[i][j] = 0;
      }
    }
  }

  while (!queue.empty()) {
    const [y, x] = queue.dequeue();

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (count[ny][nx] >= 0) continue;

      queue.enqueue([ny, nx]);
      count[ny][nx] = count[y][x] + 1;
    }
  }

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (count[i][j] === -1) {
        return -1;
      }

      answer = Math.max(answer, count[i][j]);
    }
  }

  return answer;
};

////
// index 변수 활용 풀이
//
// const solution = (N, M, tomatoes) => {
//   const count = Array.from({ length: N }, () => Array(M).fill(-1));
//   const dy = [-1, 0, 1, 0];
//   const dx = [0, 1, 0, -1];
//   const queue = [];

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (tomatoes[i][j] === 1) {
//         queue.push([i, j]);
//         count[i][j] = 0;
//       } else if (tomatoes[i][j] !== 0) {
//         count[i][j] = 0;
//       }
//     }
//   }

//   let index = 0;

//   while (queue.length !== index) {
//     const [y, x] = queue[index];

//     for (let dir = 0; dir < 4; dir++) {
//       const ny = y + dy[dir];
//       const nx = x + dx[dir];

//       if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
//       if (count[ny][nx] >= 0) continue;

//       queue.push([ny, nx]);
//       count[ny][nx] = count[y][x] + 1;
//     }

//     index++;
//   }

//   let answer = 0;

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < M; j++) {
//       if (count[i][j] === -1) {
//         return -1;
//       }

//       answer = Math.max(answer, count[i][j]);
//     }
//   }

//   return answer;
// };

console.log(solution(N, M, board));
