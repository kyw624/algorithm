# 정수 3개 입력받아 짝수만 출력하기

numArr = list(map(int, input().split()))

for i in numArr:
    if i % 2 == 0:
        print(i)


#############
# 모범 답안 #

a, b, c = input().split()

x = int(a)
y = int(b)
z = int(c)

if x % 2 == 0:
    print(x)
if y % 2 == 0:
    print(y)
if z % 2 == 0:
    print(z)
