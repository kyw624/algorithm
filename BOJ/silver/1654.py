# 랜선 자르기

K, N = map(int, input().split())
CABLES = [int(input()) for _ in range(K)]

start = 1
end = max(CABLES)
answer = 0

while start <= end:
    mid = (start + end) // 2
    cnt = 0
    for i in CABLES:
        cnt += i // mid
    if cnt >= N:
        answer = mid
        start = mid + 1
    else:
        end = mid - 1
    
print(answer)