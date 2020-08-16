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

# 2차원 dp 풀이
n = int(input())
arr = [int(input()) for _ in range(n)]

if n == 1:
    print(arr[0])
elif n == 2:
    print(arr[0] + arr[1])
else:
    dp = [[0] * 3 for _ in range(n)]
    _max = 0

    for i in range(n):
        dp[i][0] = max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])
        dp[i][1] = dp[i - 1][0] + arr[i]
        dp[i][2] = dp[i - 1][1] + arr[i]

    for i in dp:
        for j in range(3):
            if _max < i[j]:
                _max = i[j]

    print(_max)
