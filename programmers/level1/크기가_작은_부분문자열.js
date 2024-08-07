function solution(t, p) {
  const targetNum = +p;
  const targetLen = p.length;

  let result = 0;

  for (let i = 0; i <= t.length - targetLen; i++) {
    const current = +t.substr(i, targetLen);

    if (current <= targetNum) {
      result += 1;
    }
  }

  return result;
}

const inputs = [
  ['3141592', '271'],
  ['500220839878', '7'],
  ['10203', '15'],
];
const outputs = [2, 8, 3];

inputs.forEach((input, i) => {
  const result = solution(...input);

  console.log(result, result === outputs[i] ? 'YES' : 'NO');
});
