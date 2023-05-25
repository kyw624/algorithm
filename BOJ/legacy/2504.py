# 괄호의 값


def check(string):
    stack = []
    for i in string:
        if i in ("(", "["):
            stack.append(i)
        else:
            if (
                not stack
                or (i == ")" and stack[-1] == "[")
                or (i == "]" and stack[-1] == "(")
            ):
                return False
            else:
                stack.pop()
    if stack:
        return False
    return True


X = input()

if not check(X):
    print(0)
else:
    stack = []
    for i in X:
        if i in ("(", "["):
            stack.append(i)
        else:
            if i == ")":
                if stack[-1] == "(":
                    stack[-1] = 2
                else:
                    acc = 0
                    while stack[-1] != "(":
                        acc += stack[-1]
                        stack.pop()
                    stack.pop()
                    stack.append(acc * 2)
            elif i == "]":
                if stack[-1] == "[":
                    stack[-1] = 3
                else:
                    acc = 0
                    while stack[-1] != "[":
                        acc += stack[-1]
                        stack.pop()
                    stack.pop()
                    stack.append(acc * 3)
    print(sum(stack))
