// 2309 - 일곱 난쟁이

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const target = input.reduce((acc, cur) => acc + cur, 0) - 100;
const result = [];

let left = 0;
let right = input.length - 1;

while (left < right) {
  const current = input[left] + input[right];

  if (target === current) {
    result.push(left, right);
    break;
  } else if (target < current) {
    right--;
  } else {
    left++;
  }
}

// answer
input.forEach((height, i) => {
  if (i !== result[0] && i !== result[1]) {
    console.log(height);
  }
});
