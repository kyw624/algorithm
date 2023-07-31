function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total +
      row.reduce((rowSum, val, j) => (i + j <= k ? rowSum + val : rowSum), 0),
    0
  );

  // let answer = 0;

  // for (let i = 0; i < board.length; i++) {
  //   for (let j = 0; j < board[0].length; j++) {
  //     if (i + j <= k) answer += board[i][j];
  //   }
  // }

  // return answer;
}
