# 나이트의 이동

import collections


def BFS():
    dq = collections.deque()
    dq.append([current_y, current_x])
    board[current_y][current_x] = 1
    while dq:
        row, col = dq.popleft()
        if target_y == row and target_x == col:
            print(board[row][col] - 1)
            return
        for i in range(8):
            ny = row + dy[i]
            nx = col + dx[i]
            if l > ny >= 0 and l > nx >= 0 and board[ny][nx] == 0:
                dq.append([ny, nx])
                board[ny][nx] = board[row][col] + 1


T = int(input())

dy = [-2, -1, 1, 2, 2, 1, -1, -2]
dx = [1, 2, 2, 1, -1, -2, -2, -1]

for i in range(T):
    l = int(input())
    board = [[0 for i in range(l)] for i in range(l)]
    current_y, current_x = map(int, input().split())
    target_y, target_x = map(int, input().split())
    BFS()
