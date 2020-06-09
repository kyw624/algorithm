# 이상한 출석 번호 부르기1

n = int(input())
compare = list(map(int, input().split()))
store = [0] * 23

for i in range(n):
    store[compare[i]-1] += 1

for i in range(len(store)):
    print(store[i], end=' ')


#############
# 모범 답안 #

a = input()
b = input().split()

n = int(a)
arr = []
for i in range(24):
    arr.append(0)
for i in range(n):
    arr[int(b[i])] += 1

for i in range(1, 24):
    print(arr[i], end=' ')
