// 2609 - 최대공약수와 최소공배수

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort();

const smallNum = input[0];
let gcd, lcm;

for (let i = smallNum; i > 0; i--) {
  if (input[0] % i === 0 && input[1] % i === 0) {
    gcd = i;
    lcm = (input[0] * input[1]) / gcd;
    break;
  }
}

console.log(gcd + "\n" + lcm);
