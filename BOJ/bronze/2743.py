# 단어 길이 재기

word = input()
cnt = 0

if len(word) >= 1 and len(word) <= 100:
    for _ in range(len(word)):
        cnt += 1

print(cnt)
