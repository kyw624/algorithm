function solution(board) {
  const newBoard = Array.from({ length: board.length }, (_, i) => [
    ...board[i],
  ]);
  const len = board.length;
  const coords = [];
  const dy = [-1, 0, 1];
  const dx = [-1, 0, 1];

  let answer = 0;

  const getBombRange = (coord) => {
    const [y, x] = coord;

    for (let i = 0; i < 3; i++) {
      const ny = y + dy[i];

      if (ny < 0 || ny >= len) continue;

      for (let j = 0; j < 3; j++) {
        const nx = x + dx[j];

        if (nx < 0 || nx >= len) continue;

        if (newBoard[ny][nx] === 0) {
          newBoard[ny][nx] = -1;
          answer++;
        }
      }
    }
  };

  newBoard.forEach((row, i) => {
    row.forEach((cur, j) => {
      if (cur === 1) coords.push([i, j]);
    });
  });

  coords.forEach((coord) => getBombRange(coord));

  return newBoard.reduce(
    (res, row) =>
      res + row.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0),
    0
  );
}
