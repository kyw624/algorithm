# 주사위를 2개 던지면?

n, m = map(int, input().split())

for i in range(1, n + 1):
    for j in range(1, m + 1):
        print('%d %d' % (i, j))


#############
# 모범 답안 #

a, b = input().split()

n = int(a)
m = int(b)

for i in range(1, n+1):
    for j in range(1, m+1):
        print(i, j)
