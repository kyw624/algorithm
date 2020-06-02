# 월 입력받아 계절 출력하기

month = int(input())

if month in [12, 1, 2]:
    print('winter')
elif month in [3, 4, 5]:
    print('spring')
elif month in [6, 7, 8]:
    print('summer')
else:
    print('fall')


#############
# 모범 답안 #

a = input()

x = int(a)

if x == 12 or x == 1 or x == 2:
    print("winter")
elif x == 3 or x == 4 or x == 5:
    print("spring")
elif x == 6 or x == 7 or x == 8:
    print("summer")
elif x == 9 or x == 10 or x == 11:
    print("fall")
