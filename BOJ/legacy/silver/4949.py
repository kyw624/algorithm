# 균형잡힌 세상

answer = []
sign = {')': '(', ']': '['}

while True:
    str_ = input()
    if str_ == '.':
        break
    prev = []
    check = True
    for i in str_:
        if i in sign.values():
            prev.append(i)
        elif i in sign.keys():
            if prev:
                if prev[-1] == sign[i]:
                    prev.pop()
                else:
                    check = False
            else:
                check = False
                break
    if prev:
        answer.append('no')
    else:
        if check:
            answer.append('yes')
        else:
            answer.append('no')

for i in answer:
    print(i)
