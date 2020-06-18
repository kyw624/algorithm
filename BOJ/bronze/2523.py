# 별 찍기 13

N = int(input())

if N >= 1 and N <= 100:
    for i in range(1, N + 1):
        print('*' * i)
    for i in range(1, N):
        print('*' * (N - i))
