# 정수 2개 입력받아 자동 계산하기

a, b = map(int, input().split())

print(a + b)
print(a - b)
print(a * b)
print(a // b)
print(a % b)
print('%.2f' % (a / b))


#############
# 모범 답안 #

a, b = input().split()
x = int(a)
y = int(b)
print(x+y)
print(x-y)
print(x*y)
print(x//y)
print(x % y)
print('%.2f' % (x/y))
