# 나무 자르기

# 가져갈 나무: 1 <= M <= 20억
# 높이: 0 <= h <= 10억

N, M = map(int, input().split())
TREES = list(map(int, input().split()))

length = max(TREES)
max_height = 0
left = 0
right = 1000000000 if length > 1000000000 else length  # 높이 최댓값 제한

while left <= right:
    mid = (left + right) // 2  # 톱날의 높이
    cut = 0
    for i in TREES:
        if i - mid > 0:
            cut += i - mid
    if cut >= M:
        max_height = mid
        left = mid + 1
    else:
        right = mid - 1

print(max_height)
