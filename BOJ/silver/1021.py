# 회전하는 큐

def shift(arr):
    return arr.pop(0)


def left_move(arr, cnt):
    for _ in range(cnt):
        arr.append(shift(arr))
    return shift(arr)


def right_move(arr, cnt):
    for _ in range(cnt):
        arr.insert(0, arr.pop())
    return shift(arr)


def check(arr, num):
    left = arr.index(num)
    right = len(arr) - left
    if left <= right:
        left_move(arr, left)
        distance = left
    else:
        right_move(arr, right)
        distance = right
    return distance


N, M = map(int, input().split())
INDEX_LIST = list(map(int, input().split()))
queue = [i + 1 for i in range(N)]
move = 0

for i in INDEX_LIST:
    if queue.index(i) == 0:
        shift(queue)
    else:
        move = move + check(queue, i)

print(move)
