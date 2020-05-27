# 출력하기08

import io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf8')

print(chr(9484) + chr(9516) + chr(9488))
print(chr(9500) + chr(9532) + chr(9508))
print(chr(9492) + chr(9524) + chr(9496))


#############
# 모범 답안 #