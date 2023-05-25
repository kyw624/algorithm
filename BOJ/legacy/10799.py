# 쇠막대기

STICK = input()
stack = []
prev = ""
cut = False
count = 0

for i in STICK:
    if i == "(":
        stack.append(i)
        cut = False
    else:
        stack.pop()
        if prev == "(":
            count += len(stack)
            cut = True
        else:
            if cut:
                count += 1
    prev = i

print(count)
