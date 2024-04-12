function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const numbers = [i];

    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        numbers.push(j);
      }
    }

    if (numbers.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

const inputs = [
  [13, 17],
  [24, 27],
];
const outputs = [43, 52];

inputs.forEach(([left, right], index) => {
  const result = solution(left, right);
  console.log(result, result === outputs[index] ? true : false);
});
