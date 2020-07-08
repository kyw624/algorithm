# 회전하는 큐

def shift(arr):
    return arr.pop(0)


def rotate(arr, cnt, dir):
    if dir == 'left':
        for _ in range(cnt):
            arr.append(shift(arr))
    else:
        for _ in range(cnt):
            arr.insert(0, arr.pop())


N, M = map(int, input().split())
INDEX_LIST = list(map(int, input().split()))

queue = [i + 1 for i in range(N)]
move = 0

for i in INDEX_LIST:
    idx = queue.index(i)
    if idx != 0:
        left = idx
        right = len(queue) - idx
        if left <= right:
            distance, direction = left, 'left'
        else:
            distance, direction = right, 'right'
        rotate(queue, distance, direction)
        move += distance
    shift(queue)

print(move)
