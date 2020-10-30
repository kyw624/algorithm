# 불! (BFS)

from collections import deque

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

R, C = map(int, input().split())
dq1 = deque()  # 불
dq2 = deque()  # 지훈
dist1 = [[-1] * C for _ in range(R)]
dist2 = [[-1] * C for _ in range(R)]
board = [list(input()) for _ in range(R)]

for i in range(R):
    for j in range(C):
        if board[i][j] == "F":
            dq1.append([i, j])
            dist1[i][j] = 0
        if board[i][j] == "J":
            dq2.append([i, j])
            dist2[i][j] = 0

while dq1:
    x, y = dq1.popleft()
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= R or ny >= C:
            continue
        if board[nx][ny] == "#" or dist1[nx][ny] >= 0:
            continue
        dist1[nx][ny] = dist1[x][y] + 1
        dq1.append([nx, ny])

result = "IMPOSSIBLE"
flag = False

while dq2:
    x, y = dq2.popleft()
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx < 0 or ny < 0 or nx >= R or ny >= C:
            result = dist2[x][y] + 1
            flag = True
            break
        if board[nx][ny] == "#" or dist2[nx][ny] >= 0:
            continue
        if dist1[nx][ny] != -1 and dist1[nx][ny] <= dist2[x][y] + 1:
            continue
        dist2[nx][ny] = dist2[x][y] + 1
        dq2.append([nx, ny])
    if flag:
        break

print(result)
