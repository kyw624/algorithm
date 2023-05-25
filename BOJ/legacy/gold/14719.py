# 빗물

H, W = map(int, input().split())
blocks = list(map(int, input().split()))
acc = 0

for i in range(1, W - 1):
    prevMax = max(blocks[:i])
    nextMax = max(blocks[i + 1 :])
    _min = min(prevMax, nextMax)
    if blocks[i] < _min:
        acc += _min - blocks[i]

print(acc)
