# 30

N = input()
answer = ''

if '0' not in N:
    answer = -1
else:
    for i in sorted(N, reverse=True):
        answer += i
    answer = int(answer)
    if answer % 30 != 0:
        answer = -1

print(answer)
