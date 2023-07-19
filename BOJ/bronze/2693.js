// 2693 - N번째 큰 수
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...inputs] = fs.readFileSync(file).toString().trim().split("\n");

const N = 3;
const len = 10;

inputs.forEach((input) => {
  const newInput = input.split(" ").map(Number);
  newInput.sort((a, b) => a - b);

  console.log(newInput[len - N]);
});
