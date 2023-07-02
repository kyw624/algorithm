function solution(n, left, right) {
  const answer = [];

  while (left <= right) {
    const y = Math.floor(left / n);
    const x = left % n;

    answer.push(Math.max(y, x) + 1);
    left++;
  }

  return answer;
}

const inputs = [
  [
    [3, 2, 5],
    [3, 2, 2, 3],
  ],
  [
    [4, 7, 14],
    [4, 3, 3, 3, 4, 4, 4, 4],
  ],
];

inputs.forEach((input) => {
  const result = solution(...input[0]);
  const compare = JSON.stringify(result) == JSON.stringify(input[1]);

  console.log(result, compare);
});
