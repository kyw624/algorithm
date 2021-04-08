/*
1. 주어진 괄호의 짝이 맞는지 판별하는 문제.

[조건]
  - 문자열 s의 길이: 100,000 이하의 자연수
  - 문자열 s는 '(' 또는 ')' 로만 이루어져 있음.

[출력]
  - 올바른 괄호면 true, 아니라면 false 리턴.
*/

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s.charAt(i);

    if (stack.length === 0 && current === ")") {
      return false;
    }

    if (current === "(") {
      stack.push(current);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
