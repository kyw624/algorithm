# 소수 찾기

N = int(input())
numbers = list(map(int, input().split()))
cnt = 0

for i in numbers:
    divide = False
    if i == 1:
        continue
    elif i == 2:
        pass
    else:
        for j in range(2, i):
            if i % j == 0:
                divide = True
                break
    if not divide:
        cnt += 1

print(cnt)
