# 동전 2

# n가지 동전 / 합계 k원 / 동전 개수 최소 / 중복 불가
# 1 <= n <= 100
# 1 <= k <= 10,000
# arr[i] <= 100,000

n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]

d = [10001 for _ in range(k + 1)]
d[0] = 0

for j in range(1, k + 1):
    for coin in coins:
        if j - coin < 0:
            continue
        d[j] = min(d[j], d[j - coin] + 1)

if d[k] == 10001:
    print(-1)
else:
    print(d[k])

