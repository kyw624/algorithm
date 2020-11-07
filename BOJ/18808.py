# 스티커 붙이기

# 90도 회전
def rotate(arr):
    new = [[0] * r for _ in range(c)]
    for i in range(r):
        for j in range(c):
            new[j][r - 1 - i] = arr[i][j]
    return new


# 붙일 수 있는지 체크
def check(x, y):
    global acc
    for i in range(r):
        for j in range(c):
            if notebook[x + i][y + j] == 1 and sticker[i][j]:
                return False
    for i in range(r):
        for j in range(c):
            if sticker[i][j] == 1:
                notebook[x + i][y + j] = 1
                acc += 1
    return True


N, M, K = map(int, input().split())
notebook = [[0] * M for _ in range(N)]
acc = 0

for _ in range(K):
    r, c = map(int, input().split())
    sticker = []
    for _ in range(r):
        sticker.append(list(map(int, input().split())))
    cnt = 0
    while cnt < 4:
        r = len(sticker)
        c = len(sticker[0])
        isAttach = False
        for i in range(N - r + 1):
            if isAttach:
                break
            for j in range(M - c + 1):
                if check(i, j):
                    isAttach = True
                    break
        if isAttach:
            break
        sticker = rotate(sticker)
        cnt += 1

print(acc)
