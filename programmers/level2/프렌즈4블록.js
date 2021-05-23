/*
1. 같은 모양의 블록이 2x2 형태로 정사각형을 이루면 사라지면서 점수를 얻는 게임이다.
2. 각 블록들은 겹쳐져서 2x2 크기를 이룰 수 있으며, 여러 개가 있다면 한꺼번에 지워진다.
3. 지워진 블록 위의 블록들이 아래로 떨어져 빈 공간을 채운다.
4. 빈 공간을 채운 뒤 2x2를 이루게 되면 다시 지워지고 떨어지고를 반복한다.

[조건]
  - 입력으로 판의 높이(m), 폭(n), 판의 정보(board)가 주어진다.
  - 2 <= n, m <= 30
  - board는 길이 n인 문자열 m개의 배열로 주어진다.

[출력]
  - 주어진 판의 정보로 몇 개의 블록이 지워질지 리턴.
*/

function solution(m, n, board) {
  const newBoard = [...board].map((str) => str.split(""));

  while (true) {
    const store = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = newBoard[i][j];

        if (
          current !== 0 &&
          current === newBoard[i][j + 1] &&
          current === newBoard[i + 1][j] &&
          current === newBoard[i + 1][j + 1]
        ) {
          store.push([i, j]);
        }
      }
    }

    if (store.length === 0) {
      return [].concat(...newBoard).filter((value) => value === 0).length;
    }

    for (let i = 0; i < store.length; i++) {
      const y = store[i][0];
      const x = store[i][1];

      newBoard[y][x] = 0;
      newBoard[y][x + 1] = 0;
      newBoard[y + 1][x] = 0;
      newBoard[y + 1][x + 1] = 0;
    }

    for (let row = m - 1; row >= 0; row--) {
      if (newBoard[row].indexOf(0) === -1) continue;

      for (let col = 0; col < n; col++) {
        for (let cur = row - 1; cur >= 0 && newBoard[row][col] === 0; cur--) {
          if (newBoard[cur][col]) {
            newBoard[row][col] = newBoard[cur][col];
            newBoard[cur][col] = 0;
            break;
          }
        }
      }
    }
  }
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
); // 15
