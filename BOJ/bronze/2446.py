# 별 찍기 9

N = int(input())

if N > 0 and N <= 100:
    for i in range(N):
        print(' ' * i + '*' * (2 * (N - i) - 1))
    for j in range(1, N):
        print(' ' * (N - j - 1) + '*' * (2 * j + 1))
