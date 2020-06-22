# 팰린드롬인지 확인하기

word = input()
compare = word[::-1]

if word == compare:
    print(1)
else:
    print(0)
