// 2460 - 지능형 기차 2

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const answer = Array(10).fill(0);
answer[0] = input[0][1];

for (let i = 1; i < 10; i++) {
  const [minus, add] = input[i];
  answer[i] = answer[i - 1] - minus + add;
}

console.log(Math.max(...answer));
