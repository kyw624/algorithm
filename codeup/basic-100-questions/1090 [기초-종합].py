# 수 나열하기2

a, r, n = map(int, input().split())

for i in range(2, n + 1):
    a *= r

print(a)


#############
# 모범 답안 #

a, r, n = input().split()

A = int(a)
R = int(r)
N = int(n)

for i in range(N-1):
    A = A * R

print(A)
