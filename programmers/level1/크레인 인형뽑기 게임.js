// board: 게임 화면 2차원 배열
// moves: 크레인을 작동시킨 위치 배열

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let top = -1;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] != 0) {
        const current = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;

        if (stack.length !== 0 && stack[top] == current) {
          stack.pop();
          top--;
          answer += 2;
        } else {
          stack.push(current);
          top++;
        }

        break;
      }
    }
  }
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
// 4
