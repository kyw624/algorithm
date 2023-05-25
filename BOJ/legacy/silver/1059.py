# 수 2

L = int(input())
NUMBERS = list(map(int, input().split()))
N = int(input())

cnt = 0
if N in NUMBERS:
    pass
else:
    NUMBERS.append(N)
    NUMBERS.sort()
    idx = NUMBERS.index(N)
    if idx == 0:
        START = 1
    else:
        START = NUMBERS[idx - 1] + 1
    END = NUMBERS[idx + 1]
    for i in range(START, N + 1):
        for j in range(N, END):
            if i != j:
                cnt += 1

print(cnt)
