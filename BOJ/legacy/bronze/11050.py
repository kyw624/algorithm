# 이항 계수 1
# 공식 = N! / K!(N - K)!

N, K = map(int, input().split())


def factorial(val):
    fac = 1
    for i in range(2, val + 1):
        fac *= i
    return fac


if (N >= 1 and N <= 10) and (K >= 0 and K <= N):
    print(factorial(N) // (factorial(K) * factorial(N - K)))
