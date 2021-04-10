/*
1. 길이가 같은 배열 A, B에서 숫자 한개씩 뽑아 곱한다.
2. 배열의 길이만큼 반복하며, 곱한 값을 누적하여 더한다.
3. 최종 누적값이 최소가 되도록 만드는 문제.

[조건]
  - 배열 A, B의 크기: 1,000 이하의 자연수
  - 배열 A, B의 원소의 크기: 1,000 이하의 자연수

[출력]
  - 각 숫자들을 곱하여 누적한 값의 최솟값을 리턴.
*/

function solution(A, B) {
  const sortA = [...A].sort((a, b) => a - b);
  const sortB = [...B].sort((a, b) => b - a);

  return sortA.reduce((acc, cur, idx) => acc + cur * sortB[idx], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
