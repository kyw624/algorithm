// 4344 - 평균은 넘겠지

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .filter((v) => v !== "");
const n = Number(input[0]);

const scoreSet = [];
let index = 1;

while (index + 1 < input.length) {
  const students = Number(input[index]);

  scoreSet.push(input.slice(index + 1, index + 1 + students).map(Number));
  index += students + 1;

  const currentSet = scoreSet[scoreSet.length - 1];
  const average = currentSet.reduce((acc, cur) => acc + cur, 0) / students;
  const result = currentSet.reduce((acc, cur) => {
    if (cur > average) {
      return acc + 1;
    }

    return acc;
  }, 0);

  console.log(`${((result / students) * 100).toFixed(3)}%`);
}
