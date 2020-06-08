# 수 나열하기3

a, m, d, n = map(int, input().split())

for i in range(2, n + 1):
    a = a * m + d

print(a)


#############
# 모범 답안 #

a, m, d, n = input().split()

A = int(a)
M = int(m)
D = int(d)
N = int(n)

for i in range(N-1):
    A = A*M+D

print(A)
