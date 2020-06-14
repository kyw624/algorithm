# 그대로 출력하기 2

idx = 0

while idx < 100:
    try:
        print(input())
        idx += 1
    except EOFError:
        break
