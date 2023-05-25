# Z


def recursive(n, r, c):
    if n == 0:
        return 0
    side_half = 2 ** (n - 1)  # 한 변의 길이의 절반.
    if r < side_half and c < side_half:
        # 1사분면
        return recursive(n - 1, r, c)
    if r < side_half and c >= side_half:
        # 2사분면
        return side_half * side_half + recursive(n - 1, r, c - side_half)
    if r >= side_half and c < side_half:
        # 3사분면
        return 2 * side_half * side_half + recursive(n - 1, r - side_half, c)
    # 4사분면
    return 3 * side_half * side_half + recursive(n - 1, r - side_half, c - side_half)


N, r, c = map(int, input().split())

print((recursive(N, r, c)))
