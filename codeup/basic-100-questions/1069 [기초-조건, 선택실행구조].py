# 평가 입력받아 다르게 출력하기

grade = input().upper()

if grade == 'A':
    print('best!!!')
elif grade == 'B':
    print('good!!')
elif grade == 'C':
    print('run!')
elif grade == 'D':
    print('slowly~')
else:
    print('what?')


#############
# 모범 답안 #

a = input()

if a == "D":
    print("slowly~")
elif a == "C":
    print("run!")
elif a == "B":
    print("good!!")
elif a == "A":
    print("best!!!")
else:
    print("what?")
