// 불! - 4179

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(file).toString().trim().split("\n");
const [R, C] = inputs[0].split(" ").map(Number);
const board = inputs.slice(1).map((row) => row.split(""));

const solution = () => {
  class Queue {
    constructor() {
      this.data = [];
      this.head = 0;
      this.tail = 0;
    }

    size() {
      return this.tail - this.head;
    }

    enqueue(x) {
      this.data[this.tail++] = x;
    }

    dequeue() {
      if (this.size()) return this.data[this.head++];
    }
  }

  const burned = Array.from({ length: R }, () => Array(C).fill(-1));
  const distance = Array.from({ length: R }, () => Array(C).fill(-1));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const fQueue = new Queue();
  const jQueue = new Queue();

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "F") {
        fQueue.enqueue([i, j]);
        burned[i][j] = 0;
      }

      if (board[i][j] === "J") {
        jQueue.enqueue([i, j]);
        distance[i][j] = 0;
      }
    }
  }

  // type: 'F' || 'J' (불 || 지훈)
  const bfs = (type, queue) => {
    while (queue.size()) {
      const [y, x] = queue.dequeue();

      for (let dir = 0; dir < 4; dir++) {
        const ny = y + dy[dir];
        const nx = x + dx[dir];

        if (type === "F") {
          // 불
          if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;
          if (board[ny][nx] === "#" || burned[ny][nx] >= 0) {
            continue;
          }

          queue.enqueue([ny, nx]);
          burned[ny][nx] = burned[y][x] + 1;
        } else {
          // 지훈
          if (ny < 0 || ny >= R || nx < 0 || nx >= C) {
            // 범위 벗어남 === 탈출 성공
            return distance[y][x] + 1;
          }
          if (board[ny][nx] === "#" || distance[ny][nx] >= 0) continue;
          if (burned[ny][nx] !== -1 && burned[ny][nx] <= distance[y][x] + 1)
            continue;

          queue.enqueue([ny, nx]);
          distance[ny][nx] = distance[y][x] + 1;
        }
      }
    }
  };

  bfs("F", fQueue); // 불에 대한 BFS
  const answer = bfs("J", jQueue); // 지훈이에 대한 BFS

  return answer || "IMPOSSIBLE";
};

console.log(solution());
