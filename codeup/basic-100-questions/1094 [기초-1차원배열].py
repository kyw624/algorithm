# 이상한 출석 번호 부르기2

n = int(input())
arr = list(map(int, input().split()))
arr.reverse()

for i in range(len(arr)):
    print(arr[i], end=' ')


#############
# 모범 답안 #

arr = []

a = input()
b = input().split()

n = int(a)
for i in range(n):
    arr.append(int(b[i]))

i = n-1
while i >= 0:
    print(arr[i], end=' ')
    i -= 1
