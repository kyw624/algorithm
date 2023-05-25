# 별 찍기 7

N = int(input())

if N > 0 and N <= 100:
    for i in range(N):
        print(' ' * (N - i - 1) + '*' * (2 * i + 1))
    for j in range(1, N):
        print(' ' * j + '*' * (2 * (N - j) - 1))
