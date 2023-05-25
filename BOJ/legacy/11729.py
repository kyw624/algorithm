# 하노이 탑 이동 순서

# 1번, 2번, 3번 기둥: 1 + 2 + 3 = 6
# target: 6 - a - b


def hanoi(n, From, To):
    if n == 1:
        return print(From, To)
    hanoi(n - 1, From, 6 - From - To)
    print(From, To)
    hanoi(n - 1, 6 - From - To, To)


N = int(input())

print(2 ** N - 1) # 이동 횟수
hanoi(N, 1, 3)
