# 바둑판에 흰 돌 놓기

n = int(input())
board = [[0] * 19 for i in range(19)]
location = [0] * n

for i in range(n):
    x, y = map(int, input().split())
    location[i] = {'x': x, 'y': y}

for i in range(len(location)):
    board[location[i]['x'] - 1][location[i]['y'] - 1] = 1

for i in range(len(board)):
    for j in range(len(board[i])):
        print(board[i][j], end=' ')
    print()


#############
# 모범 답안 #

m = []
for i in range(20):
    m.append([])
    for j in range(20):
        m[i].append(0)

n = int(input())
for i in range(n):
    x, y = input().split()
    m[int(x)][int(y)] = 1

for i in range(1, 20):
    for j in range(1, 20):
        print(m[i][j], end=' ')
    print()
