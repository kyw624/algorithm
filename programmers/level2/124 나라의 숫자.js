/*
1. 124 나라에는 자연수만 존재한다.
2. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용한다.

[조건]
  - n: 500,000,000 이하의 자연수

[출력]
  - 자연수 n을 124 나라의 숫자로 바꿔 반환.
*/

function solution(n) {
  let answer = "";
  const NUMBERS = ["4", "1", "2"];

  while (n > 0) {
    answer = NUMBERS[n % 3] + answer;

    if (n % 3 === 0) n--;

    n = Math.floor(n / 3);
  }

  return answer;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
