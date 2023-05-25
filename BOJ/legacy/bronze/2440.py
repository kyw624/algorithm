# 별 찍기 3

N = int(input())

if N >= 1 and N <= 100:
    for i in range(N, 0, -1):
        print('*' * i)
