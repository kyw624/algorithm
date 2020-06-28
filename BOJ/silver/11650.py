# 좌표 정렬하기


N = int(input())
arr = []

for i in range(N):
    arr.append(list(map(int, input().split())))
    if i == (N - 1):
        arr.sort()

for i in arr:
    print('%d %d' % (i[0], i[1]))
