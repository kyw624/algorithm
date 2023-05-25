# 감시

"""
    1. 사무실 원본 선언
    2. cctv 좌표 리스트로 받기
    3. 모든 케이스 반복 (4 ** len(cctv))
        1) 사무실 복제본 초기화
        2) 케이스별로 방향 진행하며 복제본 값 갱신
        3) 복제본에서 0의 개수 센 후 min값 갱신
"""


def go(x, y, dir):
    # 벽을 만날때까지 해당 방향으로 진행
    dir %= 4
    while True:
        x += dx[dir]
        y += dy[dir]
        if x < 0 or y < 0 or x >= N or y >= M or office[x][y] == 6:
            return
        if office[x][y] != 0:
            continue
        office_copy[x][y] = -1


N, M = map(int, input().split())
office = []
cctv = []
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
_min = float("inf")

for i in range(N):
    office.append(list(map(int, input().split())))
    for j in range(M):
        if office[i][j] in (1, 2, 3, 4, 5):
            cctv.append([i, j])

length = len(cctv)

# 모든 케이스 탐색
for case in range(4 ** length):
    office_copy = [[0] * M for _ in range(N)]
    for i in range(N):
        for j in range(M):
            office_copy[i][j] = office[i][j]
    tmp = case
    # 각 cctv 방향 설정
    for select in range(length):
        x, y = cctv[select]
        # 0 0 0 / 1 0 0 / 2 0 0 / ... / 3 3 3
        direction = tmp % 4
        tmp //= 4
        if office[x][y] == 1:
            go(x, y, direction)
        elif office[x][y] == 2:
            go(x, y, direction)
            go(x, y, direction + 2)
        elif office[x][y] == 3:
            go(x, y, direction)
            go(x, y, direction + 1)
        elif office[x][y] == 4:
            go(x, y, direction)
            go(x, y, direction + 1)
            go(x, y, direction + 2)
        else:  # office[x][y] == 5
            go(x, y, direction)
            go(x, y, direction + 1)
            go(x, y, direction + 2)
            go(x, y, direction + 3)
    ## 케이스 별 사각지대 수
    acc = 0
    for i in range(N):
        for j in range(M):
            if office_copy[i][j] == 0:
                acc += 1
    _min = min(_min, acc)

print(_min)
