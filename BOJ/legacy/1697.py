# 숨바꼭질

"""
수빈 N
동생 K
이동 X-1, X+1, X*2
"""

from collections import deque

N, K = map(int, input().split())
dist = [-1 for _ in range(100001)]
dist[N] = 0
dq = deque()
dq.append(N)

while dist[K] == -1:
    current = dq.popleft()
    _next = [current - 1, current + 1, current * 2]
    for i in _next:
        if i < 0 or i >= len(dist):
            continue
        if dist[i] != -1:
            continue
        dist[i] = dist[current] + 1
        dq.append(i)

print(dist[K])
