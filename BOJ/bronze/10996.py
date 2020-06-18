# 별 찍기 21

N = int(input())

if N >= 1 and N <= 100:
    if N == 1:
        print('*')
    else:
        for i in range(N * 2):
            if i % 2 == 0:
                if N % 2 == 0:
                    print('* ' * (N // 2))
                else:
                    print('* ' * (N // 2) + '*')
            else:
                print(' *' * (N // 2))

# if N >= 1 and N <= 100:
#     if N == 1:
#         print('*')
#     else:
#         for i in range(N * 2):
#             for j in range(N):
#                 if i % 2 == 0:
#                     if j % 2 == 0:
#                         print('*', end='')
#                     else:
#                         print(' ', end='')
#                 else:
#                     if j % 2 == 0:
#                         print(' ', end='')
#                     else:
#                         print('*', end='')
#             print()
