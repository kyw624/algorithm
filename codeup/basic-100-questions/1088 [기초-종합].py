# 3의 배수는 통과?

n = int(input())

if (n >= 1 and n <= 100):
    for i in range(n + 1):
        if i % 3 != 0:
            print(i, end=' ')


#############
# 모범 답안 #

a = input()

n = int(a)

for i in range(1, n+1):
    if i % 3 == 0:
        continue
    print(i, end=' ')
