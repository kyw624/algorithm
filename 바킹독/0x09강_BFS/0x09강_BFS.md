# 1. 알고리즘 설명

## BFS (Breadth First Search)

다차원 배열에서 각 칸을 방문할 때 너비를 우선으로 방문하는 일

## 예시

1. 시작하는 칸을 큐에 넣고 방문했다는 표시를 남김
2. 큐에서 원소를 꺼내 그 칸의 상하좌우로 인접한 칸에 대해 3번을 진행
3. 해당 칸을 이전에 방문했다면 아무 것도 하지 않고,  
   처음으로 방문했다면 방문했다는 표시를 남기고 해당 칸을 큐에 삽입
4. 큐가 빌 때까지 2번을 반복

모든 칸이 큐에 1번씩 들어가므로 시간복잡도는 칸이 N개일 때 O(N)

```js
// n: 열 / m: 행
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
```

# 2. 응용

## 1. 거리 측정 (최단거리 등)

## 2. 시작점이 여러 개일 때

## 3. 시작점이 두 종류일 때

## 4. 1차원에서의 BFS
