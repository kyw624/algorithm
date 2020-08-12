# DSLR

from collections import deque


def bfs():
    dq = deque([[A, ""]])
    check = [0] * 10000
    check[A] = 1
    while dq:
        num, command = dq.popleft()
        if num == B:
            return command
        else:
            D = num * 2 % 10000
            S = num - 1 if num else 9999
            L = num % 1000 * 10 + num // 1000
            R = num % 10 * 1000 + num // 10
            if not check[D]:
                check[D] = 1
                dq.append([D, command + "D"])
            if not check[S]:
                check[S] = 1
                dq.append([S, command + "S"])
            if not check[L]:
                check[L] = 1
                dq.append([L, command + "L"])
            if not check[R]:
                check[R] = 1
                dq.append([R, command + "R"])


T = int(input())

for _ in range(T):
    A, B = map(int, input().split())
    print(bfs())
