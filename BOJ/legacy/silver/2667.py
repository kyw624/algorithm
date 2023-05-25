# 단지번호붙이기
# BFS 풀이

N = int(input())
MATRIX = [list(map(int, input())) for _ in range(N)]
visited = [[0 for _ in range(N)] for _ in range(N)]
answer = []

dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]
y = 0
x = 0

while True:
    if y == N:
        break
    if MATRIX[y][x] == 1 and visited[y][x] == 0:
        q = [[y, x]]
        cnt = 0
        while q:
            row, col = q.pop(0)
            if visited[row][col]:
                continue
            visited[row][col] = True
            cnt += 1
            for i in range(4):
                ny = row + dy[i]
                nx = col + dx[i]
                if ny >= N or nx >= N or ny < 0 or nx < 0:
                    continue
                elif MATRIX[ny][nx] == 0 or visited[ny][nx]:
                    continue
                else:
                    q.append([ny, nx])
        answer.append(cnt)
    if x == N - 1:
        y += 1
        x = 0
    else:
        x += 1

print(len(answer))
answer.sort()

for i in answer:
    print(i)
