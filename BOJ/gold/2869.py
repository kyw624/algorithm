# 달팽이는 올라가고 싶다

A, B, V = map(int, input().split())
day = (V - A) // (A - B)

if (V - A) % (A - B) == 0:
    day += 1
else:
    day += 2

print(day)
