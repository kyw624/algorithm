/*
1. 테이블 위에 놓인 퍼즐 조각들을 게임 보드의 빈 공간에 적절히 올려놓으려 한다.
2. 게임보드와 테이블은 모두 각 칸이 1x1 크기인 정사각 격자 모양이다.
3. 조각은 한 번에 하나씩 채워넣으며, 새로 채운 퍼즐 조각과 인접한 칸이 비어있으면 안된다. (딱 맞아야한다)
   회전시킬 수 있지만 뒤집을 수는 없다.
4. 규칙에 맞게 최대한 많은 조각을 채워 넣을 경우, 몇 칸을 채울 수 있는지 구하는 문제.

[조건]
  - 3 <= game_board의 행 길이 <= 50
  - game_board의 각 열 길이 = game_board의 행 길이
    > 게임 보드는 정사각형
    > game_board의 모든 원소는 0 또는 1
    > 0은 빈칸, 1은 이미 채워진 칸
    > 퍼즐 조각이 놓일 빈칸은 1x1크기의 정사각형이 최소 1개에서 최대 6개까지 연결된 형태로 주어진다.
  - table의 행 길이 = game_board의 행 길이
  - table의 각 열 길이 = table의 행 길이
    > 테이블은 정사각형
    > table의 모든 원소는 0 또는 1
    > 0은 빈칸, 1은 조각이 놓인 칸
    > 퍼즐 조각은 1x1크기의 정사각형이 최소 1개에서 6개까지 연결된 형태로 주어진다.
  - game_board에는 반드시 하나 이상의 빈칸이 있다.
  - table에는 반드시 하나 이상의 블록이 놓여 있다.

[출력]
  - 규칙에 맞게 최대한 많은 조각을 맞췄을 때의 칸 수를 리턴.
*/

function solution(game_board, table) {
  const LENGTH = game_board.length;
  const newBoard = [...game_board];
  const newTable = [...table];
  const visitedBoard = [];
  const visitedTable = [];
  const blanks = [];
  const puzzles = [];
  const flag = 0;
  let answer = 0;

  for (let i = 0; i < LENGTH; i++) {
    visitedBoard.push(new Array(LENGTH).fill(0));
    visitedTable.push(new Array(LENGTH).fill(0));
  }

  for (let row = 0; row < LENGTH; row++) {
    for (let col = 0; col < LENGTH; col++) {
      if (game_board[row][col] === flag && visitedBoard[row][col] === 0) {
        // 빈 칸
        bfs(game_board, visitedBoard, blanks, [row, col, flag]);
      }

      if (table[row][col] === +!flag && visitedTable[row][col] === 0) {
        // 퍼즐
        bfs(table, visitedTable, puzzles, [row, col, +!flag]);
      }
    }
  }

  // 큰 조각부터 확인하기 위해 정렬
  blanks.sort((a, b) => b.length - a.length);
  puzzles.sort((a, b) => b.length - a.length);

  const newBlanks = blanks.map((blank) => {
    return rotate(reArrange(blank));
  });
  const newPuzzles = puzzles.map((puzzle) => {
    return rotate(reArrange(puzzle));
  });

  for (let blank of newBlanks) {
    for (let i = 0; i < newPuzzles.length; i++) {
      if (JSON.stringify(blank) === JSON.stringify(newPuzzles[i])) {
        answer += newPuzzles[i].length;
        newPuzzles.splice(i, 1, -1);

        break;
      }
    }
  }

  return answer;
}

function bfs(matrix, visited, storage, args) {
  // 상, 우, 하, 좌
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const [point] = args.splice(2); // 0이면 빈칸, 1이면 퍼즐 조각
  const pieces = [args];
  const q = [args];

  visited[args[0]][args[1]] = 1;

  while (q.length > 0) {
    const current = q.shift();
    const y = current[0];
    const x = current[1];

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || ny >= matrix.length || nx < 0 || nx >= matrix.length)
        continue;

      if (visited[ny][nx] === 0 && matrix[ny][nx] === point) {
        visited[ny][nx] = 1;
        q.push([ny, nx]);
        pieces.push([ny, nx]);
      }
    }
  }

  pieces.sort();
  storage.push(pieces);
}

function reArrange(matrix) {
  const minY = Math.min(...matrix.map((coord) => coord[0]));
  const minX = Math.min(...matrix.map((coord) => coord[1]));
  const newCoordinates = [...matrix].map((point) => {
    return [point[0] - minY, point[1] - minX];
  });

  return newCoordinates.sort();
}

function rotate(arr) {
  // 시계방향 90도 회전
  if (arr.length === 1) return arr;

  const result = [];

  let current = [...arr];
  let height =
    Math.max(...current.map((coord) => coord[0])) -
    Math.min(...current.map((coord) => coord[0]));
  let width =
    Math.max(...current.map((coord) => coord[1])) -
    Math.min(...current.map((coord) => coord[1]));
  let tmp;

  // 한 방향으로 고정
  for (let count = 0; count < 4; count++) {
    current = reArrange(current.map((coord) => [height - coord[1], coord[0]]));
    result.push(current);

    tmp = width;
    width = height;
    height = tmp;
  }

  return result.sort()[0];
}

console.log(
  solution(
    [
      [1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
    ],
    [
      [1, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0],
    ]
  )
); // 14

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
      [0, 0, 0],
    ]
  )
); // 0

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    [
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    ]
  )
); // 54
