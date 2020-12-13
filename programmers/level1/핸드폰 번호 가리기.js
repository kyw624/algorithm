/*
[조건]
  - phone_number는 길이 4 이상, 20 이하인 문자열.

[출력]
  전화번호 뒤 4자리를 제외한 나머지 숫자를 전부 '*'로 치환한 문자열 반환.
*/

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution("01033334444")); // '*******4444'
console.log(solution("027778888")); // '*****8888'
