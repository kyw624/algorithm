const [input, count, ...command] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const leftStack = [...input];
const rightStack = [];

for (let i = 0; i < count; i++) {
  switch (command[i][0]) {
    case "L":
      if (leftStack.length) {
        rightStack.push(leftStack.pop());
      }
      break;

    case "D":
      if (rightStack.length) {
        leftStack.push(rightStack.pop());
      }
      break;

    case "B":
      if (leftStack.length) {
        leftStack.pop();
      }
      break;

    case "P":
      leftStack.push(command[i][2]);
      break;

    default:
      return;
  }
}

console.log(leftStack.concat(rightStack.reverse()).join(""));
