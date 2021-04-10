/*
1. 공백으로 구분된 숫자들이 나열된 문자열에서 최댓값과 최솟값을 구하는 문제.

[조건]
  - 문자열 s에는 둘 이상의 정수가 공백으로 구분되어있다.

[출력]
  - "최솟값 최댓값" 의 형태로 리턴.
*/

function solution(s) {
  const toArray = s.split(" ").sort((a, b) => a - b);

  return `${toArray[0]} ${toArray[toArray.length - 1]}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
