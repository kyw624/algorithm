// 2178 - 미로 탐색

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(file).toString().trim().split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const board = inputs.slice(1).map((input) => input.split("").map(Number));

const solution = (N, M, board) => {
  const distance = Array.from({ length: N }, () => Array(M).fill(-1));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const queue = [];

  queue.push([0, 0]);
  distance[0][0] = 0;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
      if (!board[ny][nx] || distance[ny][nx] !== -1) continue;

      queue.push([ny, nx]);
      distance[ny][nx] = distance[y][x] + 1;
    }
  }

  return distance[N - 1][M - 1] + 1;
};

console.log(solution(N, M, board));
