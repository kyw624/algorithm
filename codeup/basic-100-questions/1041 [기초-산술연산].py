# 문자 1개 입력받아 다음 문자 출력하기

char = input()
answer = ord(char) + 1

print(chr(answer))


#############
# 모범 답안 #

a = input()
n = ord(a)
c = chr(n+1)
print(c)
