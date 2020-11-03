# N과 M (11)


def solution(position):
    prev = 0
    if position == M:
        print(" ".join(map(str, array)))
        return
    for i in range(N):
        if prev != LIST[i]:
            array[position] = LIST[i]
            prev = LIST[i]
            solution(position + 1)


N, M = map(int, input().split())
LIST = sorted(list(map(int, input().split())))
array = [0 for i in range(M)]
prev = 0

solution(0)
