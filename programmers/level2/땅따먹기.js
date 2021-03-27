/*
1. N행 4열의 땅이 주어진다. (land)
2. 각 칸에는 점수가 적혀있다.
3. 같은 열을 연속하지 않고서 얻을 수 있는 최대 점수를 구하는 문제.

[조건]
  - 행의 수 N <= 100,000
  - 열의 수: 4
  - 점수: 100 이하의 자연수

[출력]
  - 주어진 land에서 연속한 행을 피하고 얻을 수 있는 최댓값
*/

function solution(land) {
  const result = [...land].reduce(
    (acc, cur) => {
      return [
        cur[0] + Math.max(acc[1], acc[2], acc[3]),
        cur[1] + Math.max(acc[0], acc[2], acc[3]),
        cur[2] + Math.max(acc[0], acc[1], acc[3]),
        cur[3] + Math.max(acc[0], acc[1], acc[2]),
      ];
    },
    [0, 0, 0, 0]
  );

  return Math.max.apply(null, result);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
); // 20
