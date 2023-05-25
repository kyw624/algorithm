# 아!

JAEHWAN = list(input())
DOCTOR = list(input())


def count(arr):
    count = 0
    for i in arr:
        if i == 'a':
            count += 1
    return count


if count(JAEHWAN) >= count(DOCTOR):
    print('go')
else:
    print('no')
