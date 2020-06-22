# 내 학점을 구해줘

T = int(input())
POINTS = [0, 0.7, 1, 1.3, 1.7, 2, 2.3, 2.7, 3, 3.3, 3.7, 4, 4.3]

for i in range(T):
    N = int(input())
    subjects = 0
    total_point = 0
    if N >= 1 and N <= 10:
        for j in range(N):
            C, G = map(float, input().split())
            if G in POINTS:
                subjects += C
                total_point += C * G
        gpa = total_point / subjects
        print('%d %.1f' % (int(subjects), gpa))
