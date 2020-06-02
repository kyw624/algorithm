# 정수 입력받아 계속 출력하기

n = int(input())
a = map(int, input().split())

for i in a:
    print(i)


#############
# 모범 답안 #

n = int(input())
a = input().split()
for x in a:
    print(x)
