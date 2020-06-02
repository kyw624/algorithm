# 0 입력될 때까지 무한 출력하기1

a = map(int, input().split())

for i in a:
    if i != 0:
        print(i)
    else:
        break


#############
# 모범 답안 #

a = input().split()

for x in a:
    if int(x) == 0:
        break
    print(x)
