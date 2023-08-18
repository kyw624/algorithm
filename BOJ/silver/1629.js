// 1629 - 곱셈

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const solution = (a, b, c) => {
  if (b === 1n) return a % c;

  let value = solution(a, b / 2n, c); // a^n * a^n = a^2n
  value = (value * value) % c;

  if (b % 2n === 0n) return value;
  return (value * a) % c;
};

console.log(Number(solution(A, B, C)));
