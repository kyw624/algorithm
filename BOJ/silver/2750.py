# 수 정렬하기

N = int(input())
numbers = []

for i in range(N):
    numbers.append(int(input()))
    if i == (N - 1):
        numbers.sort()

for i in numbers:
    print(i)
