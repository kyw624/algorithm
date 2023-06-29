// 제로

const [n, ...inputs] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];

inputs.forEach((input) => {
  if (input === 0) {
    stack.pop();
  } else {
    stack.push(input);
  }
});

console.log(stack.reduce((acc, cur) => acc + cur, 0));
