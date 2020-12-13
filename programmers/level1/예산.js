/*
[조건]
  - d는 부서별로 신청한 금액의 배열로, 길이는 1 이상 100 이하.
  - 부서별 신청 금액은 1 이상 100,000 이하의 자연수.
  - budget은 예산으로, 1 이상 10,000,000 이하의 자연수.
  - 지원금은 신청액과 일치해야 함.

[출력]
  지원 가능한 부서의 최대 수 반환.
*/

function solution(d, budget) {
  const newArray = d.sort((a, b) => a - b);
  let cost = budget;

  for (let i = 0; i < d.length; i++) {
    cost -= d[i];

    if (cost < 0) return i;
  }

  return d.length;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
