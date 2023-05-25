# 요세푸스 문제 0

N, K = map(int, input().split())

person = [(i + 1) for i in range(N)]
temp = list(person)
answer = []
idx = 0

for _ in range(N):
    length = len(temp)
    idx += K - 1
    if idx >= length:
        idx %= length
    current = temp[idx]
    answer.append(current)
    temp.remove(current)


print("<" + ", ".join(map(str, answer)) + ">")
