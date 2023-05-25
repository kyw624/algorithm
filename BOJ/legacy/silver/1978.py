# 소수 찾기

N = int(input())
numbers = list(map(int, input().split()))
cnt = 0


def prime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if i * i > num:
            break
        elif num % i == 0:
            return False
    return True


for i in numbers:
    if prime(i):
        cnt += 1

print(cnt)
