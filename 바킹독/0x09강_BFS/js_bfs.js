const bfs = (n, m, board) => {
  const visited = Array.from({ length: n }, Array(m).fill(0));
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const queue = [];

  queue.push([0, 0]);
  visited[0][0] = 1;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const ny = y + dy[dir];
      const nx = x + dx[dir];

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (visited[ny][nx] || board[ny][nx] !== 1) continue;

      visited[ny][nx] = 1;
      queue.push([ny, nx]);
    }
  }
};