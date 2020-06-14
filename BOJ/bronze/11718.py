# 그대로 출력하기

idx = 0

while idx < 100:
    try:
        print(input().strip())
        idx += 1
    except EOFError:
        break
