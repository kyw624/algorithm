# 체스판 다시 칠하기

M, N = map(int, input().split())
BOARD = [list(input()) for _ in range(M)]

minimum = 64

for i in range(M - 7):
    for j in range(N - 7):
        cnt = [0, 0]
        # White
        for k in range(i, i + 8):
            for l in range(j, j + 8):
                if (k + l - i - j) % 2 == 0:
                    if BOARD[k][l] == 'B':
                        cnt[0] += 1
                else:
                    if BOARD[k][l] == 'W':
                        cnt[0] += 1
        # Black
        for k in range(i, i + 8):
              for l in range(j, j + 8):
                  if (k + l - i - j) % 2 == 0:
                      if BOARD[k][l] == 'W':
                          cnt[1] += 1
                  else:
                      if BOARD[k][l] == 'B':
                          cnt[1] += 1
        compare = cnt[0] if cnt[0] < cnt[1] else cnt[1]
        minimum = compare if compare < minimum else minimum

print(minimum)
