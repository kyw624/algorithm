# 터렛
# 접점 사이 거리 공식
# 내접: 접점 / 외접: 접점 / 겹침: 무한대

T = int(input())

for i in range(T):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    distance = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5
    r_sum = r1 + r2
    r_sub = abs(r1 - r2)
    if distance == 0:
        if r1 == r2:
            print(-1)
        else:
            print(0)
    else:
        if distance == r_sum or distance == r_sub:
            print(1)
        elif distance < r_sum and distance > r_sub:
            print(2)
        else:
            print(0)
