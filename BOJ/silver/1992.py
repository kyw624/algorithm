# 쿼드트리

def data_check(row, col, n):
    flag = False
    num = QUAD_TREE[row][col]
    for i in range(n):
        for j in range(n):
            if num != QUAD_TREE[i + row][j + col]:
                flag = True
                break
        if flag:
            break
    if not flag:
        print(num, end='')
    else:
        print("(", end='')
        n //= 2
        data_check(row, col, n)
        data_check(row, col + n, n)
        data_check(row + n, col, n)
        data_check(row + n, col + n, n)
        print(")", end='')


N = int(input())
QUAD_TREE = [list(map(int, input())) for _ in range(N)]

data_check(0, 0, N)
