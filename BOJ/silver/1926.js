// 1926 - 그림

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [n, m] = inputs[0];
const board = inputs.slice(1);

const solution = (n, m, board) => {
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const result = [];

  const bfs = (startY, startX) => {
    const queue = [];

    let size = 1;

    queue.push([startY, startX]);
    visited[startY][startX] = 1;

    while (queue.length) {
      const [y, x] = queue.shift();

      for (let dir = 0; dir < 4; dir++) {
        const ny = y + dy[dir];
        const nx = x + dx[dir];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (visited[ny][nx] || board[ny][nx] !== 1) continue;

        queue.push([ny, nx]);
        visited[ny][nx] = 1;
        size++;
      }
    }

    return size;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0 && board[i][j] !== 0) {
        result.push(bfs(i, j));
      }
    }
  }

  const answer = [result.length, result.length ? Math.max(...result) : 0];

  return answer.join("\n");
};

console.log(solution(n, m, board));
