// 15649 - N과 M (1)

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

function recursive(k, arr, isUsed) {
  if (k === m) {
    console.log(arr.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!isUsed[i]) {
      arr[k] = i;
      isUsed[i] = true;
      recursive(k + 1, arr, isUsed);
      isUsed[i] = false;
    }
  }
}

function solution(n, m) {
  const arr = Array(m).fill(0);
  const isUsed = Array(m).fill(false);

  recursive(0, arr, isUsed);
}

solution(n, m);
