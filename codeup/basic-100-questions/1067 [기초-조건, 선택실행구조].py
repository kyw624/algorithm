# 정수 1개 입력받아 분석하기

a = int(input())

if a >= 0:
    print('plus')
else:
    print('minus')

if a % 2 == 0:
    print('even')
else:
    print('odd')


#############
# 모범 답안 #

a = input()

x = int(a)

if x > 0:
    print("plus")
elif x < 0:
    print("minus")

if x % 2 == 0:
    print("even")
else:
    print("odd")
