# 두 정수 입력받아 비교하기1

a, b = map(int, input().split())

print(1 if a > b else 0)


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)
z = int(x > y)

print(z)
