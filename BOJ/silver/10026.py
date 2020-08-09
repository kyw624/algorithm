# 적록색약

import collections


def init():
    visited = [[0 for _ in range(N)] for _ in range(N)]
    if answer:
        for i in range(N):
            for j in range(N):
                if art[i][j] == 'R':
                    art[i][j] = 'G'
    return visited


def BFS(y, x):
    dq = collections.deque()
    dq.append([y, x])
    visited[y][x] = 1
    color = art[y][x]
    while dq:
        row, col = dq.popleft()
        for i in range(4):
            ny = row + dy[i]
            nx = col + dx[i]
            if 0 <= ny < N and 0 <= nx < N and visited[ny][nx] == 0:
                if art[ny][nx] == color:
                    dq.append([ny, nx])
                    visited[ny][nx] = 1


def solution():
    cnt = 0
    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                BFS(i, j)
                cnt += 1
    return cnt


dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

N = int(input())
art = [list(input()) for _ in range(N)]
answer = []

for i in range(2):
    visited = init()
    answer.append(solution())
    print(answer[i], end=' ')
