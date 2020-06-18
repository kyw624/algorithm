# 별 찍기 15

N = int(input())

if N >= 1 and N <= 100:
    for i in range(N):
        if i == 0:
            print(' ' * (N - i - 1) + '*')
        else:
            print(' ' * (N - i - 1) + '*' + ' ' * (2 * i - 1) + '*')
