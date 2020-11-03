# N과 M (5)


def solution(position):
    if position == M:
        for i in array:
            print(i, end=" ")
        print()
        return
    for i in range(N):
        if not isUsed[i]:
            array[position] = LIST[i]
            isUsed[i] = 1
            solution(position + 1)
            isUsed[i] = 0


N, M = map(int, input().split())
LIST = sorted(list(map(int, input().split())))
isUsed = [0 for _ in range(N)]
array = [0 for _ in range(M)]

solution(0)
