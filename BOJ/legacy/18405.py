# 경쟁적 전염

from collections import deque


def bfs(queue, time):
    while queue:
        virus_type, row, col = queue.popleft()
        if time[row][col] == S:
            break
        for i in range(4):
            nx = row + dx[i]
            ny = col + dy[i]
            if nx < 0 or ny < 0 or nx >= N or ny >= N:
                continue
            if matrix[nx][ny] == 0:
                queue.append([virus_type, nx, ny])
                matrix[nx][ny] = virus_type
                time[nx][ny] = time[row][col] + 1
    return matrix[X - 1][Y - 1]


dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

N, K = map(int, input().split())

time_table = [[0] * N for _ in range(N)]  # 시간값을 누적 할 2차원 배열
matrix = []
virus = []  # 바이러스 종류와 좌표를 받을 배열

for i in range(N):
    matrix.append(list(map(int, input().split())))
    for j in range(N):
        if matrix[i][j] != 0:
            virus.append([matrix[i][j], i, j])

virus.sort()  # 작은 번호부터 정렬
queue = deque(virus)

S, X, Y = map(int, input().split())

print(bfs(queue, time_table))
