function solution(sizes) {
  const sortedArray = sizes.map((item) => [...item].sort((a, b) => a - b));
  const max = [0, 0];

  sortedArray.forEach(([a, b]) => {
    max[0] = max[0] < a ? a : max[0];
    max[1] = max[1] < b ? b : max[1];
  });

  return max[0] * max[1];
}

const inputs = [
  [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ],
  [
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ],
  [
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ],
];

const outputs = [4000, 120, 133];

inputs.forEach((input, i) => {
  const result = solution(input);

  console.log(result, result === outputs[i] ? 'YES' : 'NO');
});
