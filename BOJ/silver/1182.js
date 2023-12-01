// 1182 - 부분수열의 합

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, S, ...numbers] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s/)
  .filter((v) => v)
  .map(Number);

let answer = 0;

function recursive(k, sum) {
  if (k === N) {
    if (sum === S) {
      answer += 1;
    }

    return;
  }

  recursive(k + 1, sum);
  recursive(k + 1, sum + numbers[k]);
}

function solution(n, s) {
  recursive(0, 0);

  if (S === 0) {
    answer -= 1;
  }

  console.log(answer);
}

solution(N, S);
