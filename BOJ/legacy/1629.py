# 곱셈


def solution(base, power, mod):
    if power == 1:
        return base % mod
    value = solution(base, power // 2, mod)
    value = value * value % mod
    if power % 2 == 0:
        return value % mod
    return value * base % mod


A, B, C = map(int, input().split())

print(solution(A, B, C))
