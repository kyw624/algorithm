# 소수 구하기

M, N = map(int, input().split())


def prime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if i * i > num:
            break
        elif num % i == 0:
            return False
    return True


for i in range(M, N + 1):
    if prime(i):
        print(i)
