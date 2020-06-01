# 두 정수 입력받아 큰 수 출력하기

a, b = map(int, input().split())

print(a if a > b else b)


#############
# 모범 답안 #

a, b = input().split()
x = int(a)
y = int(b)
print(x if x > y else y)
