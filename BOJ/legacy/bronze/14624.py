# 전북대학교

N = int(input())
ROW = N // 2

if N % 2 == 0:
    print('I LOVE CBNU')
else:
    print('*' * N)
    print(' ' * (ROW) + '*')
    for i in range(ROW):
        print(' ' * (ROW - 1 - i) + '*' + ' ' * (i * 2 + 1) + '*')
