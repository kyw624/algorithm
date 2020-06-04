# 빛 섞어 색 만들기

r, g, b = map(int, input().split())
count = 0

for i in range(r):
    for j in range(g):
        for k in range(b):
            print('%d %d %d' % (i, j, k))
            count += 1

print(count)


#############
# 모범 답안 #

a, b, c = input().split()

R = int(a)
G = int(b)
B = int(c)

c = 0
for i in range(R):
    for j in range(G):
        for k in range(B):
            c += 1
            print(i, j, k)

print(c)
