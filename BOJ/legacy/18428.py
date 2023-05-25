# 감시 피하기

from itertools import combinations

N = int(input())

matrix = []
empty_coords = []  # 빈 공간의 좌표
teacher_coords = []  # 선생님의 좌표
result = False

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

for i in range(N):
    matrix.append(list(input().split()))
    for j in range(N):
        if matrix[i][j] == "X":
            empty_coords.append([i, j])
        elif matrix[i][j] == "T":
            teacher_coords.append([i, j])

# 설치 가능한 장애물의 경우의 수 완전 탐색
for combi in combinations(empty_coords, 3):
    meet = False  # 학생과 마주쳤는지 체크
    for i in combi:
        # 장애물 설치
        matrix[i[0]][i[1]] = "O"
    for teacher in teacher_coords:
        row, col = teacher
        for direction in range(4):
            nx = row
            ny = col
            change = False  # 방향 전환을 위한 변수
            while (meet == False) and (change == False):
                nx += dx[direction]
                ny += dy[direction]
                if nx < 0 or ny < 0 or nx >= N or ny >= N:
                    break
                if matrix[nx][ny] != "X":
                    if matrix[nx][ny] in ("O", "T"):
                        # 장애물이나 선생님을 만나면 방향 전환
                        change = True
                    else:
                        # 학생을 만나면 체크 후 방향 전환
                        meet = True
            if meet:
                # 학생을 만났다면 다음 케이스 실행을 위해 빠져나감
                break
        if meet:
            # 학생을 만났다면 다음 케이스 실행을 위해 빠져나감
            break
    if meet == False:
        # 감시를 피한 경우 루프 종료
        result = True
        break
    # 그게 아니라면 다음 케이스로 반복
    for i in combi:
        # 설치했던 장애물 제거
        matrix[i[0]][i[1]] = "X"

if result:
    print("YES")
else:
    print("NO")
