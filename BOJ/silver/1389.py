# 케빈 베이컨의 6단계 법칙


N, M = map(int, input().split())
INF = float('inf')
matrix = [[INF] * N for _ in range(N)]
answer = []

for i in range(M):
    a, b = map(int, input().split())
    matrix[a - 1][b - 1] = 1
    matrix[b - 1][a - 1] = 1

for node in range(N):
    for i in range(N):
        for j in range(N):
            if i == j:
                matrix[i][j] = 0
            else:
                matrix[i][j] = min(matrix[i][j], matrix[i]
                                   [node] + matrix[node][j])

for i in matrix:
    answer.append(sum(i))

for i in range(N):
    if answer[i] == min(answer):
        print(i + 1)
        break
