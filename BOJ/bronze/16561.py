# 3의 배수

n = int(input())
sum = 2
cnt = 1

for i in range(9, n, 3):
    cnt = cnt + sum
    sum += 1

print(cnt)


# 배열에 넣어서? 이미 있는배열이면 패스 앞에 제일 작은수부터
