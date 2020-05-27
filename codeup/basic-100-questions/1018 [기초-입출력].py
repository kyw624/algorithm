# 시간 입력받아 그대로 출력하기

hour, minute = input().split(':')
print(hour + ':' + minute)


#############
# 모범 답안 #

h,m=input().split(':')
print(int(h), int(m), sep=':')