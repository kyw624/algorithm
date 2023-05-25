# 가장 긴 증가하는 부분 수열

A = int(input())
sequence = list(map(int, input().split()))

dp = [1] * A

for i in range(1, A):
    for j in range(i):
        if sequence[j] < sequence[i]:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))
