# 정수 1개 입력받아 부호 바꿔 출력하기

num = int(input())
answer = ''

if num < 0:
    answer = abs(num)
else:
    answer = int('-' + str(num))

print(answer)


#############
# 모범 답안 #

a = input()
n = int(a)
print(-n)
