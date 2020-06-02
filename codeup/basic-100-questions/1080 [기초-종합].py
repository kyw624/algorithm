# 언제까지 더해야 할까?

n = int(input())
idx = 1
result = 0

while True:
    result += idx
    if result >= n:
        print(idx)
        break
    idx += 1


#############
# 모범 답안 #

a = input()

n = int(a)

i = 0
s = 0
while s < n:
    i += 1
    s += i

print(i)
