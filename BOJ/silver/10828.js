// 스택

const [n, ...inputs] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.replace("\r", ""));

const cmd = {
  push: (num) => {
    stack.push(num);
  },
  pop: () => (stack.length === 0 ? -1 : stack.pop()),
  size: () => stack.length,
  empty: () => (stack.length === 0 ? 1 : 0),
  top: () => (stack.length === 0 ? -1 : stack[stack.length - 1]),
};
const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  const [current, target] = inputs[i].split(" ");

  if (current === "push") {
    cmd[current](Number(target));
  } else {
    answer.push(cmd[current]());
  }
}

console.log(answer.join("\n"));
