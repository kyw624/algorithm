# 합이 0인 네 정수

from bisect import bisect_left, bisect_right

n = int(input())

A, B, C, D = [], [], [], []
sum_array = []
compare = []

for _ in range(n):
    a, b, c, d = map(int, input().split())
    A.append(a)
    B.append(b)
    C.append(c)
    D.append(d)

for i in range(n):
    for j in range(n):
        sum_array.append(C[i] + D[j])
        compare.append(-(A[i] + B[j]))

compare.sort()
result = 0

for i in sum_array:
    result += bisect_right(compare, i) - bisect_left(compare, i)

print(result)
