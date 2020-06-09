# 함께 문제 푸는 날

a, b, c = map(int, input().split())
MIN_VALUE = min([a, b, c])
day = 1

while True:
    if (day % a == 0 and day % b == 0 and day % c == 0):
        print(day)
        break
    day += 1


#############
# 모범 답안 #

a, b, c = input().split()

x = int(a)
y = int(b)
z = int(c)

d = 1
while (d % x != 0 or d % y != 0 or d % z != 0):
    d += 1

print(d)
