# 주사위

# 3면 = 4
# 2면 = 4(N-1) + 4(N-2)
#     = 4(2N - 3)
# 1면 = 4(N-2)(N-1) + (N-2)^2

N = int(input())
A, B, C, D, E, F = map(int, input().split())

if N == 1:
    answer = ((A + B + C + D + E + F) - max(A, B, C, D, E, F))
else:
    TWO_FACE = (2 * N - 3) * 4
    THREE_FACE = 4
    TWO_MIN = min(A+B, A+C, A+D, A+E, B+C, B+D,
                  B+F, C+E, C+F, D+E, D+F, E+F)
    THREE_MIN = min(A+B+C, A+B+D, A+C+E, A+D+E,
                    B+C+F, B+D+F, C+E+F, D+E+F)
    answer = (TWO_MIN * TWO_FACE) + (THREE_MIN * THREE_FACE)
    if N > 2:
        ONE_FACE = (N - 2) * (N - 1) * 4 + (N - 2) ** 2
        answer += (min(A, B, C, D, E, F) * ONE_FACE)

print(answer)
