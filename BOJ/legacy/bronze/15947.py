# 아기 석환 뚜루루 뚜루

N = int(input())
CONDITION = N % 14
LOOP = N // 14

lyrics = '''baby sukhwan tururu turu
very cute tururu turu
in bed tururu turu
baby sukhwan
'''.split()
k = 0
answer = ''

if N > 13:
    if CONDITION in (3, 4, 7, 8, 11, 12):
        answer = lyrics[CONDITION - 1] + ('ru' * LOOP)
        if answer[2:] >= ('ru' * 5):
            substr = list(answer[2:])
            for i in substr:
                if i == 'u':
                    k += 1
            answer = 'tu+ru*%d' % k
    else:
        answer = lyrics[CONDITION - 1]
else:
    answer = lyrics[N - 1]

print(answer)
