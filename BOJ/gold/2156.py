# 포도주 시식

n = int(input())
arr = [0]
for _ in range(n):
    arr.append(int(input()))

dp = [0] * (n + 1)
dp[1] = arr[1]

if n >= 2:
    dp[2] = arr[1] + arr[2]

if n > 2:
    for i in range(3, n + 1):
        dp[i] = dp[i - 1]
        if dp[i] < dp[i - 2] + arr[i]:
            dp[i] = dp[i - 2] + arr[i]
        if dp[i] < dp[i - 3] + arr[i] + arr[i - 1]:
            dp[i] = dp[i - 3] + arr[i] + arr[i - 1]

print(dp[n])
