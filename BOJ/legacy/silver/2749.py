# 피보나치 수 3

def fibo(num, mod):
    a, b = 0, 1
    for _ in range(num):
        a, b = (b % mod), (a + b % mod)
    return a


n = int(input())

mod = 1000000
period = 15 * (mod // 10)

n %= period

print(fibo(n, mod))
