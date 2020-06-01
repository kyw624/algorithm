# 참/거짓이 서로 같을 때에만 참 출력하기

a, b = map(int, input().split())

a = bool(a)
b = bool(b)

print(int(a == b))


#############
# 모범 답안 #

a, b = input().split()
x = int(a)
y = int(b)
b1 = bool(x)
b2 = bool(y)
z = int(b1 == b2)

print(z)
