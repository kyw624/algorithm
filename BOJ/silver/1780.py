# 종이의 개수

def paper_check(row, col, n):
    flag = False
    num = ARRAY[row][col]
    for i in range(row, row + n):
        for j in range(col, col + n):
            if ARRAY[i][j] != num:
                flag = True
                break
        if flag:
            break
    if not flag:
        answer[num + 1] += 1
    else:
        n //= 3
        for i in range(3):
            for j in range(3):
                paper_check(row + i * n, col + j * n, n)


N = int(input())
ARRAY = [list(map(int, input().split())) for _ in range(N)]
answer = [0, 0, 0]

paper_check(0, 0, N)

for i in answer:
    print(i)
