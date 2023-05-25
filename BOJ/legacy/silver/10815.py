# 숫자 카드

N = int(input())
HAVE = list(map(int, input().split()))
HAVE.sort()
M = int(input())
COMPARE = list(map(int, input().split()))

answer = [0 for _ in range(M)]

for i in range(M):
    start = 0
    end = N - 1
    while start <= end:
        mid = (start + end) // 2
        if HAVE[mid] == COMPARE[i]:
            answer[i] = 1
            break
        elif HAVE[mid] < COMPARE[i]:
            start = mid + 1
        else:
            end = mid - 1

for i in answer:
    print(i, end=' ')
