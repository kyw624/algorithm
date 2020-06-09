# 이상한 출석 번호 부르기3

n = int(input())
arr = list(map(int, input().split()))

print(min(arr))


#############
# 모범 답안 #

a = input()
b = input().split()

n = int(a)
arr = []
for i in range(n):
    arr.append(int(b[i]))

m = 23
for i in range(n):
    if m > arr[i]:
        m = arr[i]

print(m)
