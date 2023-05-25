# N과 M (10)


def solution(position):
    prev = 0
    if position == M:
        print(" ".join(map(str, array[:])))
        return
    for i in range(N):
        if (
            not isUsed[i]
            and prev != LIST[i]
            and (position == 0 or LIST[i] >= array[position - 1])
        ):
            array[position] = LIST[i]
            isUsed[i] = 1
            prev = LIST[i]
            solution(position + 1)
            isUsed[i] = 0


N, M = map(int, input().split())
LIST = sorted(list(map(int, input().split())))
array = [0 for i in range(M)]
isUsed = [0 for i in range(N)]
prev = 0

solution(0)
