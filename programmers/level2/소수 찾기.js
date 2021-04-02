/*
1. 한자리 숫자가 적힌 종이 조각이 흩어져있다.
2. 조각들을 붙여 만들 수 있는 소수의 개수를 구하려한다.
3. 파라미터
  - numbers: 종이 조각들의 숫자가 적힌 문자열

[조건]
  - 1 <= numbers.length <= 7
  - 각 숫자의 범위: 0 ~ 9
  - numbers: "013" => 0, 1, 3이 적힌 조각들

[출력]
  - 조각들로 만들 수 있는 소수의 개수 반환.
*/

function solution(numbers) {
  const toArray = numbers
    .split("")
    .map(Number)
    .sort((a, b) => b - a);
  const maxNum = parseInt(toArray.join(""));
  const primeNumbers = new Array(maxNum + 1).fill(true);
  const result = [];
  let count = 0;

  primeNumbers[0] = primeNumbers[1] = false;

  // 가능한 최댓값까지의 에라토스테네스의 체 활용
  for (let i = 0; i * i <= maxNum; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= maxNum; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = permute([...numbers], i);

    result.push(...permutation);
  }

  new Set(result.map(Number)).forEach((num) => {
    if (primeNumbers[num]) count++;
  });

  return count;
}

function permute(array, digit) {
  const store = [];

  if (digit === 1) return array.map((value) => value);

  array.forEach((current, index) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const next = permute(rest, digit - 1);
    const combined = next.map((each) => [current, ...each].join(""));

    store.push(...combined);
  });

  return store;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
