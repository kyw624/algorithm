# 연월일 입력받아 그대로 출력하기

year, month, day = input().split('.')
print('%04d.%02d.%02d' % (int(year), int(month), int(day)))


#############
# 모범 답안 #

a,b,c=input().split('.')

print('%04d' % int(a), end='.')
print('%02d' % int(b), end='.')
print('%02d' % int(c))