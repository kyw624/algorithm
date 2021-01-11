/*
1. 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 도달한 플레이어 수
2. 전체 스테이지의 개수 N, 사용자가 멈춰있는 스테이지 번호가 담긴 배열 stages.
  - stages의 각 원소는 현재 도전중인 스테이지의 번호를 나타낸다.
  - 원소들 중 N+1은 마지막 스테이지(N번째 스테이지) 까지 클리어 한 사용자를 나타낸다.

[조건]
  - 1 <= N <= 500
  - 1 <= stages 길이 <= 200,000
  - stages 각 원소는 1이상 N+1 이하의 자연수
  - 실패율이 같은 스테이지는 작은 번호의 스테이지 먼저 나열
  - 스테이지에 도달한 유저가 없는 경우 실패율은 0

[출력]
  - 실패율이 높은 스테이지부터 내림차순으로 나열된 배열을 반환.
*/

function solution(N, stages) {
  const RATE = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let losers = 0;
    let peoples = 0;

    [...stages].map((currentStage) => {
      if (i + 1 <= currentStage) {
        peoples++;

        if (i + 1 === currentStage) losers++;
      }
    });

    RATE[i] = [losers / peoples, i + 1]; // [실패율, 스테이지 번호]
  }

  return RATE.sort((a, b) => b[0] - a[0]).map((current) => current[1]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
