# 짝수 합 구하기

n = int(input())
result = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        result += i

print(result)


#############
# 모범 답안 #

a = input()

n = int(a)

s = 0
for i in range(1, n+1):
    if(i % 2 == 0):
        s += i

print(s)
