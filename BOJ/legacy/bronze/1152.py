# 단어의 개수

string = input()

if len(string) <= 1000000:
    answer = len(string.split())
    print(answer)
