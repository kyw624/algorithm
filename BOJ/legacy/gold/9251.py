# LCS (Longest Common Subsequence, 최장 공통 부분 수열)

A = input()
B = input()
memo = [[0 for _ in range(len(B) + 1)] for _ in range(len(A) + 1)]

for i in range(1, len(A) + 1):
    for j in range(1, len(B) + 1):
        if A[i - 1 : i] == B[j - 1 : j]:
            memo[i][j] = memo[i - 1][j - 1] + 1
        else:
            memo[i][j] = max(memo[i - 1][j], memo[i][j - 1])

print(memo[-1][-1])
