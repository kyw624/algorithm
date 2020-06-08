# 수 나열하기1

a, d, n = map(int, input().split())

for i in range(1, n):
    a += d

print(a)


#############
# 모범 답안 #

a, d, n = input().split()

A = int(a)
D = int(d)
N = int(n)

for i in range(N-1):
    A = A + D

print(A)
