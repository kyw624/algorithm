# RGB거리

N = int(input())
RGB = [[0, 0, 0] for _ in range(N)]

for i in range(N):
    RGB[i] = list(map(int, input().split()))

for i in range(1, N):
    for j in range(3):
        idx1 = (j + 1) % 3
        idx2 = (j + 2) % 3
        RGB[i][j] += min(RGB[i-1][idx1], RGB[i-1][idx2])

print(min(RGB[N - 1]))
