# 참 거짓 바꾸기

a = int(input())

print(int(not a))


#############
# 모범 답안 #

a = input()

x = int(a)
b = bool(x)
x = int(not b)

print(x)
