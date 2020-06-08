# 여기까지! 이제 그만~

n = int(input())
result = 0

for i in range(n + 1):
    result += i
    if result >= n:
        print(result)
        break


#############
# 모범 답안 #

a = input()

n = int(a)

s = 0
i = 1
while s < n:
    s += i
    i += 1

print(s)
