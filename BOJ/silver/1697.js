// 1697 - 숨바꼭질

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(file).toString().trim().split(" ").map(Number);

const solution = (N, K) => {
  const dist = Array(100001).fill(-1);
  const queue = [N];
  dist[N] = 0;

  while (dist[K] === -1) {
    const cur = queue.shift();

    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (next < 0 || next > 100000) continue;
      if (dist[next] !== -1) continue;

      queue.push(next);
      dist[next] = dist[cur] + 1;
    }
  }

  return dist[K];
};

console.log(solution(N, K));
