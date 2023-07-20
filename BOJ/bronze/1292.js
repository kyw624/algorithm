// 1292 - 쉽게 푸는 문제

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs.readFileSync(file).toString().trim().split(" ").map(Number);

let num = 1;
let len = 0;
let answer = 0;

while (len < B) {
  for (let i = 0; i < num && len < B; i++) {
    if (len >= A - 1) {
      answer += num;
    }
    len++;
  }

  num++;
}

console.log(answer);
