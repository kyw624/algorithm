# 거스름돈

price = int(input())
change = 1000 - price
coins = 0


def bill(money, pay, coin):
    coin += money // pay
    money %= pay
    return money, coin


while change > 0:
    if change // 500 >= 1:
        change, coins = bill(change, 500, coins)
    elif change // 100 >= 1:
        change, coins = bill(change, 100, coins)
    elif change // 50 >= 1:
        change, coins = bill(change, 50, coins)
    elif change // 10 >= 1:
        change, coins = bill(change, 10, coins)
    elif change // 5 >= 1:
        change, coins = bill(change, 5, coins)
    else:
        change, coins = bill(change, 1, coins)

print(coins)
