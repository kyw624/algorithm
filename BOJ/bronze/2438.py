# 별 찍기 1

N = int(input())

if N >= 1 and N <= 100:
    for i in range(1, N + 1):
        print('*' * i)
