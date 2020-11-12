# 배열 합치기

N, M = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

merged = []
a_idx, b_idx = 0, 0

while a_idx < N or b_idx < M:
    if a_idx == N:
        merged.append(B[b_idx])
        b_idx += 1
    elif b_idx == M:
        merged.append(A[a_idx])
        a_idx += 1
    elif A[a_idx] > B[b_idx]:
        merged.append(B[b_idx])
        b_idx += 1
    else:
        merged.append(A[a_idx])
        a_idx += 1

print(" ".join(map(str, merged)))
