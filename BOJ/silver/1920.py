# 수 찾기

N = int(input())
A = list(map(int, input().split()))
M = int(input())
COMPARES = list(map(int, input().split()))

for i in range(M):
    if COMPARES[i] in A:
        print(1)
    else:
        print(0)
