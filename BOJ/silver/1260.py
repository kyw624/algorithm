# DFS와 BFS

def dfs(current, row, visited):
    visited += [current]
    length = len(row[current])
    for i in range(length):
        if row[current][i] and i not in visited:
            visited = dfs(i, row, visited)
    return visited


def bfs(start):
    queue = [start]
    visited = [start]
    while queue:
        current = queue.pop(0)
        length = len(matrix[current])
        for i in range(length):
            if matrix[current][i] and i not in visited:
                visited += [i]
                queue += [i]
    return visited


N, M, V = map(int, input().split())
matrix = [[0] * (N + 1) for _ in range(N + 1)]
answer = [0, 0]

for _ in range(M):
    EDGE_LIST = list(map(int, input().split()))
    matrix[EDGE_LIST[0]][EDGE_LIST[1]] = 1
    matrix[EDGE_LIST[1]][EDGE_LIST[0]] = 1

answer[0] = dfs(V, matrix, [])
answer[1] = bfs(V)

print(' '.join(map(str, answer[0])))
print(' '.join(map(str, answer[1])))
