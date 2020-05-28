# 정수 3개 입력받아 합과 평균 출력하기

'''
a, b, c = map(int, input().split())
sum = a + b + c

print(sum)
print('%.1f' % (sum / 3))
'''


a = list(map(int, input().split()))
sum = 0
avg = 0

for i in a:
    sum += i
    if i == a[-1]:
        avg = '%.1f' % (sum / len(a))

print(sum)
print(avg)


#############
# 모범 답안 #

a, b, c = input().split()
x = int(a)
y = int(b)
z = int(c)

print(x+y+z)
print('%.1f' % ((x+y+z)/3))
