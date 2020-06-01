# 비트단위로 OR 하여 출력하기

a, b = map(int, input().split())

print(a | b)


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)

print(x ^ y)
