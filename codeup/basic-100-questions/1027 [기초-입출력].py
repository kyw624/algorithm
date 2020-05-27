# 년월일 입력 받아 형식 바꿔 출력하기

year, month, day = input().split('.')

print('%s-%s-%s' % (day, month, year))


#############
# 모범 답안 #

y, m, d = input().split('.')

print('%02d' % int(d), end='-')
print('%02d' % int(m), end='-')
print('%04d' % int(y))
