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

q = [[0, 0]]
dist[0][0] = 1

while q:
    row, col = q.pop(0)
    if row == N and col == M:
        break
    if visited[row][col]:
        continue
    visited[row][col] = True
    # 상
    if check(row - 1, col):
        q.append([row - 1, col])
        dist[row - 1][col] = dist[row][col] + 1
    # 하
    if check(row + 1, col):
        q.append([row + 1, col])
        dist[row + 1][col] = dist[row][col] + 1
    # 좌
    if check(row, col - 1):
        q.append([row, col - 1])
        dist[row][col - 1] = dist[row][col] + 1
    # 우
    if check(row, col + 1):
        q.append([row, col + 1])
        dist[row][col + 1] = dist[row][col] + 1

print(dist[N - 1][M - 1])
