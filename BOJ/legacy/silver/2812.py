# 크게 만들기

N, K = map(int, input().split())
NUM = list(map(int, input()))

stack = []
del_cnt = K
top = 0

for i in range(N):
    if len(stack) == 0:
        stack.append(NUM[i])
    else:
        if (stack[top] < NUM[i]) and del_cnt:
            while (del_cnt > 0) and stack:
                if stack[top] < NUM[i]:
                    stack.pop()
                    del_cnt -= 1
                    top -= 1
                else:
                    break
        stack.append(NUM[i])
        top += 1

answer = ''.join(map(str, stack[:top - del_cnt + 1]))
print(answer)
