# 소리 파일 저장용량 계산하기

h, b, c, s = map(int, input().split())

BIT_TO_BYTE = h * b * c * s / 8
BYTE_TO_KB = BIT_TO_BYTE / 1024
KB_TO_MB = BYTE_TO_KB / 1024

print('%.1f MB' % KB_TO_MB)


#############
# 모범 답안 #

a, b, c, d = input().split()

H = int(a)
B = int(b)
C = int(c)
S = int(d)

print('%.1f MB' % (H*B*C*S/8/1024/1024))
