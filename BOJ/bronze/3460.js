// 3460 - 이진수

const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.forEach((num) => {
  const binary = num.toString(2);
  const len = binary.length;
  const result = [];

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      result.push(len - 1 - i);
    }
  }

  console.log(result.join(" "));
});
