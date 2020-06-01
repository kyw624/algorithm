# 정수 3개 입력받아 가장 작은 수 출력하기

a, b, c = map(int, input().split())
tmp = a if a < b else b

print(tmp if tmp < c else c)


#############
# 모범 답안 #
