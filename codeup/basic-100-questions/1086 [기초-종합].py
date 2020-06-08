# 그림 파일 저장용량 계산하기

W, H, B = map(int, input().split())

BIT_TO_BYTE = W * H * B / 8
BYTE_TO_KB = BIT_TO_BYTE / 1024
KB_TO_MB = BYTE_TO_KB / 1024

print('%.2f MB' % KB_TO_MB)


#############
# 모범 답안 #

a, b, c = input().split()

W = int(a)
H = int(b)
B = int(c)

print('%.2f MB' % (W*H*B/8/1024/1024))
