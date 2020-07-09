# 피보나치 수

n = int(input())
store = []

for i in range(n + 1):
    if i in (0, 1):
        store.append(i)
    else:
        store.append(store[i - 2] + store[i - 1])

print(store[n])
