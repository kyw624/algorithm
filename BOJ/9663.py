# N-Queen

count = 0


def solution(x):
    global count
    if x == N:
        count += 1
        return
    for y in range(N):
        if not (col[y] or left_right[x + y] or right_left[x - y + N - 1]):
            col[y] = left_right[x + y] = right_left[x - y + N - 1] = 1
            solution(x + 1)
            col[y] = left_right[x + y] = right_left[x - y + N - 1] = 0


N = int(input())
col = [0] * N  # 같은 열 체크
right_left = [0] * (2 * N - 1)  # / 대각선 체크
left_right = [0] * (2 * N - 1)  # \ 대각선 체크

solution(0)
print(count)
