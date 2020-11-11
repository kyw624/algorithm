# 치킨 배달

from itertools import combinations

N, M = map(int, input().split())
MAP = []
house = []  # 집들 좌표
store = []  # 치킨집들 좌표
result = float("inf")  # 도시의 치킨 거리

for i in range(N):
    line = list(map(int, input().split()))
    MAP.append(line)
    for j in range(N):
        if MAP[i][j] == 1:
            house.append([i, j])
        elif MAP[i][j] == 2:
            store.append([i, j])

combi = list(combinations(store, M))

for case in combi:
    acc = 0  # 현재 케이스의 도시의 치킨 거리
    for i in house:
        _min = float("inf")  # 각 집의 치킨 거리
        for j in case:
            distance = abs(i[0] - j[0]) + abs(i[1] - j[1])
            _min = min(_min, distance)
        acc += _min
    result = min(acc, result)

print(result)
