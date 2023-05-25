# X보다 작은 수

N, X = map(int, input().split())
A = list(map(int, input().split()))
answer = []

for i in A:
    if X > i:
        answer.append(i)

for i in answer:
    print(i, end=' ')
