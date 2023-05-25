# 특정 거리의 도시 찾기
# N개 정점, M개 간선, X 출발 도시, 거리가 K인 도시 출력 / 없으면 -1 출력

from collections import deque


def bfs(start):
    queue = deque([start])
    while queue:
        node = queue.popleft()
        for i in edge_list[node]:
            if not distance[i]:
                queue.append(i)
                distance[i] = distance[node] + 1


N, M, K, X = map(int, input().split())

edge_list = [[] for _ in range(N + 1)]
distance = [0] * (N + 1)
check = False

for _ in range(M):
    a, b = map(int, input().split())
    edge_list[a].append(b)

bfs(X)

for i in range(1, N + 1):
    if distance[i] == K:
        print(i)
        check = True

if check == False:
    print(-1)
