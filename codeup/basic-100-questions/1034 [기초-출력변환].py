# 8진 정수 1개 입력받아 10진수로 출력하기

'''
num = int(input())

print(num, 8)
'''

num = input()
answer = 0
idx = -1

for i in range(0, len(num)):
    answer += int(num[idx]) * (8 ** i)
    idx -= 1

print(int(answer))


#############
# 모범 답안 #

a = input()
n = int(a, 8)
print(n)
