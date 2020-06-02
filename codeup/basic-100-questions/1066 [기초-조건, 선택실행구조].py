# 정수 3개 입력받아 짝/홀 출력하기

a = map(int, input().split())

for i in a:
    if i % 2 == 0:
        print('even')
    else:
        print('odd')


#############
# 모범 답안 #

a, b, c = input().split()

x = int(a)
y = int(b)
z = int(c)

if x % 2 == 0:
    print("even")
else:
    print("odd")
if y % 2 == 0:
    print("even")
else:
    print("odd")
if z % 2 == 0:
    print("even")
else:
    print("odd")
