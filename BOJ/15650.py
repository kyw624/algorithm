# N과 M (2)


def solution(position):
    if position == M:
        for i in range(M):
            print(array[i], end=" ")
        print()
        return
    for i in range(1, N + 1):
        if position > 0 and array[position - 1] > i:
            continue
        if not isUsed[i]:
            array[position] = i
            isUsed[i] = 1
            solution(position + 1)
            isUsed[i] = 0


N, M = map(int, input().split())
array = [0 for _ in range(M)]
isUsed = [0 for _ in range(N + 1)]

solution(0)
