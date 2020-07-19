# 토마토

from collections import deque


def zero_check(matrix):
    flag = False
    for i in matrix:
        if 0 in i:
            flag = True
    if flag:
        return True
    return False


def idx_check(x, y, matrix):
    for i in range(y):
        for j in range(x):
            if matrix[i][j] == 1:
                dq.append([i, j])


def bfs(x, y, matrix):
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    visited = [[0] * x for _ in range(y)]
    dist = [[0] * x for _ in range(y)]
    for i in range(y):
        for j in range(x):
            if MATRIX[i][j] == -1:
                dist[i][j] = -1
    for i in dq:
        dist[i[0]][i[1]] = 1
    while dq:
        row, col = dq.popleft()
        if visited[row][col]:
            continue
        visited[row][col] = 1
        for i in range(4):
            ny = row + dy[i]
            nx = col + dx[i]
            if nx < 0 or ny < 0 or nx > x - 1 or ny > y - 1:
                continue
            if visited[ny][nx]:
                continue
            if matrix[ny][nx] == 0:
                dq.append([ny, nx])
                dist[ny][nx] = dist[row][col] + 1
    return dist


M, N = map(int, input().split())
MATRIX = [list(map(int, input().split())) for _ in range(N)]
dq = deque()

if not zero_check(MATRIX):
    print(0)
else:
    idx_check(M, N, MATRIX)
    result = bfs(M, N, MATRIX)
    if zero_check(result):
        print(-1)
    else:
        _max = 0
        for i in result:
            if max(i) > _max:
                _max = max(i)
        print(_max - 1)
