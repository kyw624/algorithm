# 요세푸스 문제 0

N, K = map(int, input().split())

person = [(i + 1) for i in range(N)]
temp = list(person)
answer = []
idx = 0

while len(temp) > 0:
    length = len(temp)
    for _ in range(K - 1):
        if idx >= length:
            idx = 0
        idx += 1
        if idx >= length:
            idx = 0
    current = temp[idx]
    answer.append(current)
    temp.remove(current)

print("<" + ", ".join(map(str, answer)) + ">")
