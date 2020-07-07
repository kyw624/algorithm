# 균형잡힌 세상

answer = []

while True:
    str_ = input()
    if str_ == '.':
        break
    prev = []
    check = True
    for i in str_:
        if i in ('(', '['):
            prev.append(i)
        elif i in (')', ']'):
            if not prev:
                check = False
                break
            elif i == ')':
                if prev[-1] == '(':
                    prev.pop()
                else:
                    check = False
                    break
            elif i == ']':
                if prev[-1] == '[':
                    prev.pop()
                else:
                    check = False
                    break
    if not prev:
        if check:
            answer.append('yes')
        else:
            answer.append('no')
    else:
        answer.append('no')

for i in answer:
    print(i)
