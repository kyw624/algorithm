# 이분 그래프

from collections import deque


def bfs(start):
    dq = deque()
    dq.append(start)
    check[start] = 1
    while dq:
        current = dq.popleft()
        for node in lines[current]:
            if check[node] == 0:
                dq.append(node)
                if check[current] > 0:
                    check[node] = -1
                elif check[current] < 0:
                    check[node] = 1
            elif check[current] == check[node]:
                return False
    return True


K = int(input())

for i in range(K):
    V, E = map(int, input().split())
    lines = [[] for _ in range(V)]
    check = [0] * V
    for j in range(E):
        a, b = map(int, input().split())
        lines[a - 1].append(b - 1)
        lines[b - 1].append(a - 1)
    for node in range(V):
        if not check[node]:
            if bfs(node):
                answer = "YES"
            else:
                answer = "NO"
                break
    print(answer)
