# N과 M (3)


def solution(position):
    if position == M:
        for i in array:
            print(i, end=" ")
        print()
        return
    for i in range(1, N + 1):
        array[position] = i
        solution(position + 1)


N, M = map(int, input().split())
array = [0 for _ in range(M)]

solution(0)
