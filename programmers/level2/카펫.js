/*
1. 카펫의 가장자리는 갈색, 나머지 부분은 노란색으로 칠해짐.
2. 주어지는 갈색, 노란색의 수로 카펫의 크기 구하기.

[조건]
   - 8 <= brown <= 5,000
   - 1 <= yellow <= 2,000,000
   - 가로 >= 세로

[출력]
  - 카펫의 가로, 세로 크기를 리턴 // return [가로, 세로]
*/

function solution(brown, yellow) {
  const total = brown + yellow;
  let answer;

  // yellow의 값이 최소 1이기 때문에 세로값 3부터 시작
  for (let i = 3; i <= total / i; i++) {
    if (total % i === 0) {
      const border = (total / i + i) * 2 - 4;

      if (border === brown) return [total / i, i];
    }
  }
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
