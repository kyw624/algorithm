# 평균

N = int(input())

if N <= 1000:
    SCORES = list(map(int, input().split()))
    M = max(SCORES)

sum = 0

for i in SCORES:
    sum += i / M * 100

print(sum / N)
