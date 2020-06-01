# 한 번에 2의 거듭제곱 배로 출력하기

a, b = map(int, input().split())

if a >= 0 and b <= 10:
    print(a << b)


#############
# 모범 답안 #

a, b = input().split()

x = int(a)
y = int(b)

print(x << y)
