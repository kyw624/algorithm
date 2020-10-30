# 그림

from collections import deque


def bfs(x, y):
    dq = deque([[x, y]])
    visited[x][y] = 1
    acc = 1
    while dq:
        row, col = dq.popleft()
        for i in range(4):
            nx = row + dx[i]
            ny = col + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if visited[nx][ny]:
                continue
            if board[nx][ny]:
                dq.append([nx, ny])
                acc += 1
                visited[nx][ny] = 1
    values.append(acc)


n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * m for _ in range(n)]
count = 0
values = []

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

for i in range(n):
    for j in range(m):
        if board[i][j] and not visited[i][j]:
            count += 1
            bfs(i, j)

print(count)
if values:
    print(max(values))
else:
    print(0)
