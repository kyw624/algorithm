const dfs = (n, m, board) => {
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const stack = [];
  const [startY, startX] = [0, 0];

  stack.push([startY, startX]);
  visited[startY][startX] = 1;

  while (stack.length) {
    const [y, x] = stack.pop();

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (board[ny][nx] === 0 || visited[ny][nx] === 1) continue;

      stack.push([ny, nx]);
      visited[ny][nx] = 1;
    }
  }
};
