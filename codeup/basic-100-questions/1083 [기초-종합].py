# 3 6 9 게임의 왕이 되자!

n = input()

for i in range(1, int(n) + 1):
    to_string = str(i)
    length = len(to_string)
    if length >= 2:
        answer = ''
        for j in range(0, length):
            if int(to_string[j]) in [3, 6, 9]:
                answer += 'X'
        if answer != '':
            print(answer, end=' ')
        else:
            print(i, end=' ')
    else:
        if i in [3, 6, 9]:
            print('X', end=' ')
        else:
            print(i, end=' ')


#############
# 모범 답안 #
# => 입력이 9로 고정

a = input()

n = int(a)

for i in range(1, n+1):
    if i % 3 == 0:
        print('X', end=' ')
    else:
        print(i, end=' ')
