# 별 찍기 17

N = int(input())

if N >= 1 and N <= 100:
    for i in range(1, N):
        if i == 1:
            print(' ' * (N - i) + '*')
        else:
            print(' ' * (N - i) + '*' + ' ' * (2 * i - 3) + '*')
    print('*' * (2 * N - 1))
