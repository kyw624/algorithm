# 16진수 구구단?

n = int(input(), 16)
end = int('F', 16)

for i in range(1, end + 1):
    a = hex(n)[2:].upper()
    b = hex(i)[2:].upper()
    c = hex(n * i)[2:].upper()

    print('%s*%s=%s' % (a, b, c))


#############
# 모범 답안 #
