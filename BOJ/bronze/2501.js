// 2501 - 약수 구하기

const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const result = [1];

for (let i = 2; i <= N; i++) {
  if (N % i === 0) {
    result.push(i);
  }
}

const answer = result.length < K ? 0 : result[K - 1];
console.log(answer);
