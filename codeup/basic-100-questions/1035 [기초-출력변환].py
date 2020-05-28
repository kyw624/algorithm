# 16진 정수 1개 입력받아 8진수로 출력하기(

num = input()
convert_hex = int(num, 16)
convert_oct = oct(convert_hex)

print(int(convert_oct[2:]))


#############
# 모범 답안 #

a = input()
n = int(a, 16)
print('%o' % n)
