# 정수 1개 입력받아 평가 출력하기

score = int(input())

if score <= 100 and score >= 90:
    print('A')
elif score >= 70:
    print('B')
elif score >= 40:
    print('C')
else:
    print('D')


#############
# 모범 답안 #

a = input()

x = int(a)

if x >= 90:
    print('A')
elif x >= 70:
    print('B')
elif x >= 40:
    print('C')
else:
    print('D')
