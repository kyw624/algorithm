# 주디와 당근농장

N, R, C = map(int, input().split())
ROW = R % 2
COL = C % 2

for i in range(1, N + 1):
    for j in range(1, N + 1):
        if i % 2 == ROW:
            if j % 2 == COL:
                print('v', end='')
            else:
                print('.', end='')
        else:
            if j % 2 == COL:
                print('.', end='')
            else:
                print('v', end='')
    print()
