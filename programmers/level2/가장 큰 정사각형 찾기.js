/*
1. 0과 1로 채워진 board에서 1로 이루어진 가장 큰 정사각형 찾기.

[조건]
  - board는 2차원 배열.
  - board의 행: 1,000 이하의 자연수
  - board의 열: 1,000 이하의 자연수
  - board의 값은 0 또는 1로 이루어져 있다.

[출력]
  - 1로 이루어진 가장 큰 정사각형의 넓이
*/

function solution(board) {
  const row = board.length;
  const col = board[0].length;

  if (row < 2 || col < 2) return 1;

  const dp = [...board];
  let max = 0;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (dp[i][j]) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }

      if (dp[i][j] > max) max = dp[i][j];
    }
  }

  return max * max;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
); // 4

console.log(
  solution([
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
  ])
); // 1
