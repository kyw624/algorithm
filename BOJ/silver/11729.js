// 11729 - 하노이 탑 이동 순서

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const K = Number(fs.readFileSync(file).toString().trim());

const answer = [];

const solution = (K, from, to) => {
  if (K === 0) return;

  solution(K - 1, from, 6 - from - to);
  answer.push(`${from} ${to}`);
  solution(K - 1, 6 - from - to, to);
};

solution(K, 1, 3);
console.log(answer.length);
console.log(answer.join("\n"));
