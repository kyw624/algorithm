// 1074 - Z

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, R, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, r, c) => {
  if (n === 0) return 0;

  let half = 2 ** (n - 1);

  if (r < half && c < half) return solution(n - 1, r, c);
  if (r < half && c >= half) return half * half + solution(n - 1, r, c - half);
  if (r >= half && c < half)
    return 2 * half * half + solution(n - 1, r - half, c);

  return 3 * half * half + solution(n - 1, r - half, c - half);
};

console.log(solution(N, R, C));
