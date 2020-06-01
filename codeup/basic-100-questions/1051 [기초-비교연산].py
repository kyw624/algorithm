# 두 정수 입력받아 비교하기3

a, b = map(int, input().split())

print(int(a <= b))


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)
z = int(x <= y)

print(z)
