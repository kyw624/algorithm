# ATM

N = int(input())  # 사람 수
P = list(map(int, input().split()))  # 각각 인출시간
P.sort()

time = 0
answer = 0

for i in P:
    time += i
    answer += time

print(answer)
