# 최소, 최대

N = int(input())
numbers = list(map(int, input().split()))

if len(numbers) == N:
    max_ = max(numbers)
    min_ = min(numbers)

print('%d %d' % (min_, max_))
