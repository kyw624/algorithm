/*
  n: 전체 학생 수. (2 <= n <= 30)
  lost[]: 체육복을 도난당한 학생들의 번호. (1 <= lost <= n)
  reserve[]: 여벌의 체육복이 있는 학생들의 번호. (1 <= reserve <= n)

  * reserve의 학생이 도난당한 경우도 있다. 이 때 남는 체육복은 자신이 가짐.

  >> 최대한 많은 학생의 수 return
*/

/*
  1. reserve 돌면서 lost에 자신이 있는지 확인 (indexOf)
    - 있으면 각 배열에서 splice;
  2. lost 돌면서 reserve에 lost - 1이 있는지 확인 (indexOf)
    - 있으면 count++; reserve.splice(reserve.indexOf(lost - 1));
    - 없으면 lost + 1 확인
      - 있으면 count++; reserve.splice(reserve.indexOf(lost + 1));
*/

function solution(n, lost, reserve) {
  let answer = 0;
  const isHave = new Array(n + 1).fill(-1); // 학생번호별 체육복 보유 여부

  // isHave 초기화
  for (let i = 0; i < n; i++) {
    const current = i + 1;
    const lostIndex = lost.indexOf(current);
    const reserveIndex = reserve.indexOf(current);

    if (lostIndex === -1) {
      // 잃어버리지 않은 학생
      isHave[current] = 1;
    } else if (reserveIndex !== -1) {
      // 잃어버렸지만 여벌이 있는 학생
      isHave[current] = 1;

      // lost, reserve 배열 업데이트
      lost.splice(lostIndex, 1);
      reserve.splice(reserveIndex, 1);
    } else {
      isHave[current] = 0;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    if (isHave[lost[i]] === 1) {
      // 이미 체육복이 있는 학생
      continue;
    } else {
      const front = reserve.indexOf(lost[i] - 1);
      const back = reserve.indexOf(lost[i] + 1);

      // 전, 후 확인하며 isHave 업데이트
      if (front !== -1) {
        isHave[lost[i]] = 1;
        reserve.splice(front, 1);
      } else if (back !== -1) {
        isHave[lost[i]] = 1;
        reserve.splice(back, 1);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (isHave[i] === 1) answer++;
  }

  return answer;
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);
solution(3, [3], [1]);
solution(3, [1, 2], [2, 3]);
