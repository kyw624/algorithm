# 최대공약수

def gcd(a, b):
    if a == b:
        return a
    else:
        r = a % b
        if r == 0:
            return b
        else:
            return gcd(b, r)


A, B = map(int, input().split())

if A < B:
    A, B = B, A

print('1' * gcd(A, B))
