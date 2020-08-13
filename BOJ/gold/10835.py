# 카드게임

N = int(input())
left = list(map(int, input().split()))
right = list(map(int, input().split()))
scores = [[0 for _ in range(N + 1)] for _ in range(N + 1)]

for i in reversed(range(N)):
    for j in reversed(range(N)):
        if left[i] > right[j]:
            scores[i][j] = scores[i][j + 1] + right[j]
        else:
            scores[i][j] = max(scores[i + 1][j], scores[i + 1][j + 1])

print(scores[0][0])
