/*
1. 모든 참가자들에게 숫자들과 3가지의 연산문자(+, -, *)로 이루어진 연산 수식이 전달된다.
2. 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출하는 문제. (절댓값)
3. 단, 우선순위가 같은 연산자는 없어야 한다.
4. 예를 들어 일반적인 수학에서는 +, -가 동일한 순위이지만 이렇게 2개 이상의 연산자가 동일한 순위를 가지면 안된다.

[조건]
  - expression의 길이는 3 이상 100 이하인 문자열이다.
  - expression은 공백, 괄호없이 오로지 숫자와 3가지 연산자로만 이루어진 중위표기법의 연삭식이다.
  - 잘못된 연산식은 주어지지 않는다.
  - expression의 피연산자(operand)는 0 이상 999 이하의 숫자이다.
  - expression은 적어도 1개 이상의 연산자를 포함한다.
  - 연산자 우선순위를 어떻게 적용하더라도, 중간 계산값과 최종 결괏값은 절댓값이 2^63 - 1 이하가 되도록 입력이 주어진다.
  - 같은 연산자끼리는 앞의 것이 우선순위가 더 높다.

[출력]
  - 가능한 가장 큰 숫자의 절댓값을 리턴
*/

function solution(expression) {
  const NUM_ARRAY = expression.match(/\d+/g);
  const OPER_ARRAY = expression.match(/\D+/g);
  const OPER_SET = new Set(OPER_ARRAY);
  const cases = permutation(Array.from(OPER_SET), OPER_SET.size);
  const answer = [];

  let nums;
  let opers;

  for (let i = 0; i < cases.length; i++) {
    const current = cases[i];

    nums = [...NUM_ARRAY];
    opers = [...OPER_ARRAY];

    current.forEach((oper) => {
      while (opers.indexOf(oper) !== -1) {
        const idx = opers.indexOf(oper);
        const res = calculate(nums[idx], nums[idx + 1], opers[idx]);

        nums.splice(idx, 2, res);
        opers.splice(idx, 1);
      }
    });

    answer.push(Math.abs(nums[0]));
  }

  return Math.max.apply(null, answer);
}

function permutation(arr, selectNum) {
  let result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);

    result.push(...combineFixer);
  });

  return result;
}

function calculate(a, b, oper) {
  const val1 = parseInt(a);
  const val2 = parseInt(b);

  switch (oper) {
    case "*":
      return val1 * val2;
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    default:
      return;
  }
}

/*
// 완탐
  1. 연산자의 수만큼 반복
  2. 가능한 모든 우선순위 조합을 돌린 연산결과를 배열에 저장
  3. 가장 큰 값을 출력
*/

console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
