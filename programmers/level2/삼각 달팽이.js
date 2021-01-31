/*
1. 밑변의 길이, 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행.

[조건]
  - 1 <= n <= 1000

[출력]
  - 첫 행부터 마지막 행까지 순서대로 합친 새로운 배열 return.
*/

function solution(n) {
  const snail = [];
  const dx = [0, 1, -1];
  const dy = [1, 0, -1];

  for (let i = 0; i < n; i++) {
    snail.push(new Array(i + 1));
  }

  let num = 1;
  let x = 0;
  let y = -1;
  let count = n;
  let idx = 0;

  while (count > 0) {
    for (let i = 0; i < count; i++) {
      x += dx[idx % 3];
      y += dy[idx % 3];
      snail[y][x] = num++;
    }

    count--;
    idx++;
  }

  const answer = [];

  for (let i = 0; i < snail.length; i++) {
    for (let j = 0; j < snail[i].length; j++) {
      answer.push(snail[i][j]);
    }
  }

  return answer;
}

console.log(solution(4)); // [1, 2, 9, 3, 10, 8, 4, 5, 6, 7];
console.log(solution(5)); // [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9];
console.log(solution(6)); // [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11];
