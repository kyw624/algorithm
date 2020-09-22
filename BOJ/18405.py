# 경쟁적 전염

from collections import deque


def bfs(queue, time):
    while queue:
        row, col = queue.popleft()
        if time[row][col] == S:
            return
        current = matrix[row][col]
        for i in range(4):
            nx = row + dx[i]
            ny = col + dy[i]
            if nx < 0 or ny < 0 or nx >= N or ny >= N:
                continue
            if matrix[nx][ny] == 0:
                queue.append([nx, ny])
                matrix[nx][ny] = current
                time[nx][ny] = time[row][col] + 1


def getSortedVirusCoordinates():
    array = []
    # i: 바이러스 번호
    for i in range(1, K + 1):
        for row in range(N):
            for col in range(N):
                if matrix[row][col] == i:
                    array.append([row, col])
    return deque(array)


dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N, K = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]
time_table = [[0] * N for _ in range(N)]

# S초 뒤에 (X, Y)의 바이러스 종류 출력
S, X, Y = map(int, input().split())

if S > 0:
    # 낮은 번호의 바이러스 좌표부터 queue에 입력
    queue = getSortedVirusCoordinates()
    bfs(queue, time_table)

print(matrix[X - 1][Y - 1])
