# 숫자의 개수

A = int(input())
B = int(input())
C = int(input())

MUL = str(A * B * C)
answer = [0] * 10

for i in range(len(MUL)):
    if int(MUL[i]) == 0:
        answer[0] += 1
    else:
        answer[int(MUL[i])] += 1

for i in answer:
    print(i)
