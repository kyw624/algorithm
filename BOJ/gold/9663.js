// 9663 - N-Queen

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(file).toString().trim());

const isUsed1 = Array(n).fill(false); // y축
const isUsed2 = Array(n).fill(false); // 대각선 x+y
const isUsed3 = Array(n).fill(false); // 대각선 x-y

let answer = 0;

function recursive(k) {
  if (k === n) {
    answer += 1;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (isUsed1[i] || isUsed2[k + i] || isUsed3[k - i + n - 1]) {
      continue;
    }

    isUsed1[i] = true;
    isUsed2[k + i] = true;
    isUsed3[k - i + n - 1] = true;
    recursive(k + 1);
    isUsed1[i] = false;
    isUsed2[k + i] = false;
    isUsed3[k - i + n - 1] = false;
  }
}

function solution(n) {
  recursive(0);
  console.log(answer);
}

solution(n); // 92
