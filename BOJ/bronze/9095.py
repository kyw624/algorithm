# 1, 2, 3 더하기


T = int(input())
memoization = [0] * 11

for i in range(T):
    n = int(input())
    for j in range(n + 1):
        if memoization[j] == 0:
            if j == 0:
                memoization[j] = 1
            elif j in (1, 2):
                memoization[j] = j
            else:
                memoization[j] = memoization[j - 3] + \
                    memoization[j - 2] + memoization[j - 1]
    print(memoization[n])
