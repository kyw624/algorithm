# N과 M (7)


def solution(position):
    if position == M:
        for i in array:
            print(i, end=" ")
        print()
        return
    for i in LIST:
        array[position] = i
        solution(position + 1)


N, M = map(int, input().split())
LIST = sorted(list(map(int, input().split())))
array = [0 for _ in range(M)]

solution(0)
