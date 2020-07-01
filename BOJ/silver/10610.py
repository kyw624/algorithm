# 30

N = input()

if '0' not in N:
    print(-1)

else:
    txt = 0
    for i in N:
        txt += int(i)

    if txt % 3 != 0:
        print(-1)
    else:
        for i in sorted(N, reverse=True):
            print(i, end='')
