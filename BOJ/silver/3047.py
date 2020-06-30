# ABC

NUMBERS = list(map(int, input().split()))
NUMBERS.sort()
ABC = input()

for i in ABC:
    if i == 'A':
        answer = NUMBERS[0]
    elif i == 'B':
        answer = NUMBERS[1]
    else:
        answer = NUMBERS[2]
    print('%d' % answer, end=' ')
