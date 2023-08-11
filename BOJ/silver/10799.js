// 10799 - 쇠막대기

/*
  1. 열린 괄호 들어오면 다음 괄호 확인
    1-1. 닫힌 괄호면 레이저
    1-2. 열린 괄호면 막대기 개수, answer 1 증가
 
  2. 레이저 쏘면 현재 막대기 개수만큼 answer 증가

  3. 레이저 아닌 닫힌 괄호 들어오면 막대기 개수 1 감소
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split("");

let sticks = 0;
let answer = 0;

input.forEach((bracket, i) => {
  // 1.
  if (bracket === "(") {
    if (input[i + 1] === ")") {
      // 1-1.
      answer += sticks; // 2.
    } else {
      // 1-2.
      sticks++;
      answer++;
    }
  } else {
    if (input[i - 1] !== "(") {
      // 3
      sticks--;
    }
  }
});

console.log(answer);
