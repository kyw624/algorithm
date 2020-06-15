# 고려대학교에는 공식 와인이 있다

C, K, P = map(int, input().split())
answer = 0

for i in range(1, C + 1):
    answer = answer + ((K * i) + (P * (i ** 2)))

print(answer)
