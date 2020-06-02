# 정수 1개 입력받아 카운트다운 출력하기1

n = int(input())

while (n > 0):
    print(n)
    n -= 1


#############
# 모범 답안 #

a = input()

n = int(a)

while n >= 1:
    print(n)
    n = n-1
