// 4949 - 균형잡힌 세상

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(file).toString().split("\n");

const bracketPairs = {
  "]": "[",
  ")": "(",
};
const openBrackets = Object.values(bracketPairs);
const closeBrackets = Object.keys(bracketPairs);
const answer = [];

let stack;
let isBreak;

for (const input of inputs) {
  if (input === ".") break;

  stack = [];
  isBreak = false;

  for (const char of input) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack[stack.length - 1] === bracketPairs[char]) {
        stack.pop();
      } else {
        answer.push("no");
        isBreak = true;
        break;
      }
    }
  }

  if (!isBreak) {
    if (stack.length === 0) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  }
}

console.log(answer.join("\n"));
