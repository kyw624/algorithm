# 10진 정수 입력받아 16진수로 출력하기1

'''
num = int(input())
print(hex(num)[2:])
'''

num = int(input())
ref = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'}
answer = ''

while num > 0:
    tmp = num % 16
    if tmp >= 10:
        tmp = ref[tmp]

    answer = str(tmp) + answer
    num //= 16

print(answer)


#############
# 모범 답안 #

a = input()
n = int(a)
print('%x' % n)
