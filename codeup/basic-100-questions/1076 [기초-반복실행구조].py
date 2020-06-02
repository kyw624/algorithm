# 문자 1개 입력받아 알파벳 출력하기

start = ord('a')
end = ord(input())

while start <= end:
    print(chr(start), end=' ')
    start += 1


#############
# 모범 답안 #

c = input()

n = ord(c)
i = ord('a')

while i <= n:
    print(chr(i), end=' ')
    i += 1
