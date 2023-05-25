# 점프 점프

N = int(input())
distance = list(map(int, input().split()))

if N == 1:
    print(0)
else:
    dp = [N] * N
    dp[0] = 0
    for i in range(N):
        for j in range(1, distance[i] + 1):
            if i + j >= N:
                continue
            dp[i + j] = min(dp[i] + 1, dp[i + j])
    print(dp[N - 1] if dp[N - 1] != N else -1)
