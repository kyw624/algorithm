# 기타줄

import math

N, M = map(int, input().split())

package_price = []
one_price = []

for i in range(M):
    a, b = map(int, input().split())
    package_price.append(a)
    one_price.append(b)

package_price = min(package_price)
one_price = min(one_price)

sum_price = (package_price * (N // 6)) + (one_price * (N % 6))
sum_package = package_price * math.ceil(N / 6)
sum_one = one_price * N

_min = min(sum_price, sum_package, sum_one)

print(_min)
