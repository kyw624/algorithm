# 거스름돈

price = int(input())
change = 1000 - price
coins = [500, 100, 50, 10, 5, 1]
cnt = 0

for i in coins:
    cnt += change // i
    change %= i

print(cnt)
