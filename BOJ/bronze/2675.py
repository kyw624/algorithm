# 문자열 반복

T = int(input())


def string_repeat(string, count):
    answer = ''
    for i in range(len(string)):
        answer = answer + (string[i] * count)
    return answer


if T >= 1 and T <= 1000:
    for i in range(T):
        R, S = input().split()
        R = int(R)
        if len(S) >= 1 and len(S) <= 20:
            print(string_repeat(S, R))
