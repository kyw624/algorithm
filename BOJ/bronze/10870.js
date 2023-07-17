// 10870 - 피보나치 수 5

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(file));

// 재귀
function recursive(n) {
  if (n <= 1) {
    return n;
  }

  return recursive(n - 1) + recursive(n - 2);
}

// 반복문
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

console.log(fibonacci(input));
