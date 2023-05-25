# 배수들의 합

N, M = map(int, input().split())
K = set(map(int, input().split()))

store = set()
sum_ = 0

for i in range(1, N + 1):
    for j in K:
        if (i % j == 0) and (i not in store):
            store.add(i)
            sum_ += i
            break

print(sum_)
