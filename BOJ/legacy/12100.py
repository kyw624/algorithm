# 2048 (Easy)

# 90도 회전
def rotate():
    after = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            after[j][N - 1 - i] = copy[i][j]
    for i in range(N):
        for j in range(N):
            copy[i][j] = after[i][j]


def move(dir):
    while dir > 0:
        rotate()
        dir -= 1
    for i in range(N):
        tmp = [0] * N
        idx = 0
        for j in range(N):
            if copy[i][j] == 0:
                continue
            if tmp[idx] == 0:
                tmp[idx] = copy[i][j]
            elif tmp[idx] == copy[i][j]:
                tmp[idx] *= 2
                idx += 1
            else:
                idx += 1
                tmp[idx] = copy[i][j]
        for j in range(N):
            copy[i][j] = tmp[j]


N = int(input())
board = [list(map(int, input().split())) for _ in range(N)]
copy = [[0] * N for _ in range(N)]
_max = 0

for case in range(1024):
    # 모든 경우의 수 탐색 (4 ** 5)
    for i in range(N):
        for j in range(N):
            copy[i][j] = board[i][j]
    tmp = case
    for i in range(5):
        direction = tmp % 4
        tmp //= 4
        move(direction)
    for i in range(N):
        for j in range(N):
            _max = max(_max, copy[i][j])

print(_max)
