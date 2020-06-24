# 1로 만들기

N = int(input())
arr = [0] * (N + 1)

if N > 1:
    if N == 2:
        arr[2] = 1
    elif N >= 3:
        arr[2] = arr[3] = 1

for i in range(4, N + 1):
    a = arr[i - 1]
    b = c = 1000
    if i % 3 == 0:
        b = arr[i // 3]
    if i % 2 == 0:
        c = arr[i // 2]
    arr[i] = min(a, b, c) + 1

print(arr[N])
