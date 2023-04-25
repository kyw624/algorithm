/*
자연수 n이 매개변수로 주어진다.
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return

[조건]
  - 3 ≤ n ≤ 1,000,000
*/

function solution(n) {
  let answer;

  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
