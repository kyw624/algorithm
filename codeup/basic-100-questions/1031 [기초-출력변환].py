# 10진 정수 1개 입력받아 8진수로 출력하기

'''
num = int(input())
print(oct(num)[2:])
'''

num = int(input())
answer = ''

while num > 0:
    answer = str(num % 8) + answer
    num //= 8

print(int(answer))


#############
# 모범 답안 #

a = input()
n = int(a)
print('%o' % n)
