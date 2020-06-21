# OX 퀴즈

T = int(input())

for i in range(T):
    case = input()
    current = 0
    score = 0
    length = len(case)
    if length > 0 and length < 80:
        for i in range(length):
            if case[i] == 'O':
                current += 1
            else:
                current = 0
            score += current
        print(score)
