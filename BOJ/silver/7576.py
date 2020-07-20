# 토마토

from collections import deque


def bfs():
    while dq:
        row, col = dq.popleft()
        for i in range(4):
            ny = row + dy[i]
            nx = col + dx[i]
            if nx < 0 or ny < 0 or nx >= M or ny >= N:
                continue
            if matrix[ny][nx]:
                continue
            matrix[ny][nx] = matrix[row][col] + 1
            dq.append([ny, nx])


M, N = map(int, input().split())
matrix = []

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]
dq = deque()

for i in range(N):
    matrix.append(list(map(int, input().split())))
    for j in range(M):
        if matrix[i][j] == 1:
            dq.append([i, j])

bfs()
_max = 0

for i in range(N):
    if 0 in matrix[i]:
        print(-1)
        break
    _max = max(_max, max(matrix[i]))

print(_max - 1)
