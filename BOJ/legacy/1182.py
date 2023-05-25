# 부분수열의 합

count = 0


def solution(position, acc):
    global count
    if position == N:
        if acc == S:
            count += 1
        return
    solution(position + 1, acc)
    solution(position + 1, acc + LIST[position])


N, S = map(int, input().split())
LIST = list(map(int, input().split()))

solution(0, 0)

if S == 0:
    count -= 1

print(count)
