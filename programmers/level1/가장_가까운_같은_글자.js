function solution(s) {
  const lastIndex = {};
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (Object.hasOwn(lastIndex, char)) {
      result.push(i - lastIndex[char]);
    } else {
      result.push(-1);
    }

    lastIndex[char] = i;
  }

  return result;
}

const inputs = ['banana', 'foobar'];
const outputs = [
  [-1, -1, -1, 2, 2, 2],
  [-1, -1, 1, -1, -1, -1],
];

inputs.forEach((input, i) => {
  const result = solution(input);

  console.log(
    result,
    JSON.stringify(result) === JSON.stringify(outputs[i]) ? 'YES' : 'NO'
  );
});
