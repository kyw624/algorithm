# 하나라도 참이면 참 출력하기


a, b = map(int, input().split())

a = bool(a)
b = bool(b)

print(int(a or b))


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)
b1 = bool(x)
b2 = bool(y)
z = int(b1 or b2)

print(z)
