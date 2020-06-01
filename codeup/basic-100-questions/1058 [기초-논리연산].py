# 둘 다 거짓일 경우만 참 출력하기

a, b = map(int, input().split())

a = bool(a)
b = bool(b)

print(int(a == 0 and b == 0))

#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)
b1 = bool(x)
b2 = bool(y)
z = int((not b1) and (not b2))

print(z)
