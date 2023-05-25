# 설탕 배달

N = int(input())
cnt = 0

if N >= 3 and N <= 5000:
    while True:
        if N % 5 == 0:
            cnt += (N // 5)
            print(cnt)
            break
        elif N < 3:
            print(-1)
            break
        elif N == 0:
            print(cnt)
            break
        cnt += 1
        N -= 3
else:
    print(-1)
