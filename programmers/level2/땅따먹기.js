/*
1. N행 4열의 땅이 주어진다. (land)
2. 각 칸에는 점수가 적혀있다.
3. 같은 열을 연속하지 않고서 얻을 수 있는 최대 점수를 구하는 문제.

[조건]
  - 행의 수 N <= 100,000
  - 열의 수: 4
  - 점수: 100 이하의 자연수

[출력]
  - 주어진 land에서 연속한 행을 피하고 얻을 수 있는 최댓값
*/

function solution(land) {
  const dp = [];

  for (let i = 0; i <= land.length; i++) {
    dp.push([0, 0, 0, 0]);
  }

  for (let i = 1; i < land.length + 1; i++) {
    dp[i][0] =
      land[i - 1][0] + Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
    dp[i][1] =
      land[i - 1][1] + Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
    dp[i][2] =
      land[i - 1][2] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
    dp[i][3] =
      land[i - 1][3] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  }

  return Math.max.apply(null, dp[dp.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
); // 20
