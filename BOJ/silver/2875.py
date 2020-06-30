# 대회 or 인턴

N, M, K = map(int, input().split())

teams = 0

while True:
    N -= 2
    M -= 1
    if (N < 0) or (M < 0) or (N + M) < K:
        break
    teams += 1

print(teams)
