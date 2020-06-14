# 3의 배수

n = int(input())
sum = 2
cnt = 1

for i in range(9, n, 3):
    cnt = cnt + sum
    sum += 1

print(cnt)
