# 평균은 넘겠지

C = int(input())

for i in range(C):
    tmp = list(map(int, input().split()))
    n = tmp[0]
    scores = tmp[1:]
    avg = sum(scores) / n
    cnt = 0
    for j in scores:
        if j > avg:
            cnt += 1
    print('%.3f%%' % (cnt / n * 100))
