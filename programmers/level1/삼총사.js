function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

const inputs = [
  [-2, 3, 0, 2, -5],
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];
const outputs = [2, 5, 0];

inputs.forEach((input, index) => {
  const result = solution(input);
  console.log(result, result === outputs[index] ? true : false);
});
