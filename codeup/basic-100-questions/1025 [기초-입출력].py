# 정수 1개 입력받아 나누어 출력하기

num = list(input())
multiple = 10000

for i in num:
    print('[%d]' % (int(i) * multiple))
    multiple //= 10


#############
# 모범 답안 #

n = input()

print("["+str(int(n[0])*10000)+"]")
print("["+str(int(n[1])*1000)+"]")
print("["+str(int(n[2])*100)+"]")
print("["+str(int(n[3])*10)+"]")
print("["+str(int(n[4]))+"]")
