# 미로 탐색
#   최단거리 => BFS 이용

def check(row, col):
    if row >= N or col >= M or row < 0 or col < 0:
        return False
    if MATRIX[row][col] == 0 or visited[row][col]:
        return False
    return True


N, M = map(int, input().split())
MATRIX = [list(map(int, input())) for _ in range(N)]
dist = [[0 for _ in range(M)] for _ in range(N)]
visited = [[0 for _ in range(M)] for _ in range(N)]

# 상, 하, 좌, 우
dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

q = [[0, 0]]
dist[0][0] = 1

while q:
    row, col = q.pop(0)
    if row == N and col == M:
        break
    if visited[row][col]:
        continue
    visited[row][col] = True
    for i in range(4):
        ny = row + dy[i]
        nx = col + dx[i]
        if check(ny, nx):
            q.append([ny, nx])
            dist[ny][nx] = dist[row][col] + 1

print(dist[N - 1][M - 1])
