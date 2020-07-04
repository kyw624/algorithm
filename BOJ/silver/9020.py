# 골드바흐의 추측

def prime_check(num):
    arr = []
    for i in range(2, num):
        toggle = True
        for j in range(2, i):
            if j * j > i:
                break
            elif i % j == 0:
                toggle = False
        if toggle:
            arr.append(i)
    return arr


def solution(num, arr):
    tmp = [i for i in arr if i <= num]
    idx = max(tmp)
    length = len(tmp)
    for i in range(idx, -1, -1):
        for j in range(i, length):
            if (tmp[i] + tmp[j]) == num:
                return [tmp[i], tmp[j]]


T = int(input())
input_list = []

for _ in range(T):
    input_list.append(int(input()))

MAX_NUM = max(input_list)
PRIME = prime_check(MAX_NUM)

for i in range(T):
    answer = solution(input_list[i], PRIME)
    print(answer[0], end=' ')
    print(answer[1])
