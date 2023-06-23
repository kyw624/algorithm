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

/**
 *
 * @param {number} m - 높이
 * @param {number} n - 너비
 * @param {string[]} board - [row, row, ...] 형태의 1차원 배열
 */
function solution(m, n, board) {
  let answer = 0;
  const newBoard = board.map((v) => v.split(""));

  while (true) {
    const target = search(m, n, newBoard);

    if (target.length === 0) {
      break;
    }

    breakBlocks(target, newBoard);
    reArrange(m, n, newBoard);
  }

  return newBoard.reduce(
    (total, current) => total + current.filter((v) => v === 0).length,
    0
  );
}

// 깨질 블록 탐색
function search(h, w, matrix) {
  // console.log("function: [ search ]");

  const store = [];

  for (let i = 0; i < h - 1; i++) {
    for (let j = 0; j < w - 1; j++) {
      const current = matrix[i][j];

      if (
        current !== 0 &&
        current === matrix[i][j + 1] &&
        current === matrix[i + 1][j] &&
        current === matrix[i + 1][j + 1]
      ) {
        store.push([i, j]);
      }
    }
  }

  return store;
}

// 대상 블록 부수기
function breakBlocks(location, matrix) {
  // console.log("function: [ breakBlocks ]");

  location.forEach(([y, x]) => {
    matrix[y][x] = 0;
    matrix[y + 1][x] = 0;
    matrix[y][x + 1] = 0;
    matrix[y + 1][x + 1] = 0;
  });
}

// 블록 부순 뒤 재배열
function reArrange(h, w, matrix) {
  // 맨 아랫줄부터 0 찾으면 그 위로 올라가며 재배열
  // 맨 윗줄은 X
  for (let currentRow = h - 1; currentRow > 0; currentRow--) {
    const targetColumns = matrix[currentRow]
      .map((v, i) => {
        if (v === 0) {
          return i;
        }
      })
      .filter((v) => v !== undefined);

    if (targetColumns.length > 0) {
      targetColumns.forEach((col) => {
        for (let row = currentRow - 1; row >= 0; row--) {
          if (matrix[row][col]) {
            matrix[currentRow][col] = matrix[row][col];
            matrix[row][col] = 0;
            break;
          }
        }
      });
    }
  }
}

const inputs = [
  [4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]], // 14
  [6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]], // 15
];

inputs.forEach((input, i) => {
  console.log(`${i + 1}번째 입력`);
  console.log(solution(...input));
  console.log();
});
