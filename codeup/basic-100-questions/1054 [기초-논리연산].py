# 둘 다 참일 경우만 참 출력하기

a, b = map(int, input().split())

print(int(a == 1 and b == 1))


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)
b1 = bool(x)
b2 = bool(y)
z = int(b1 and b2)

print(z)
