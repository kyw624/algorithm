/*
# 조건
  - arr은 길이 1 이상, 100 이하인 배열.
  - arr의 원소는 -10,000 이상 10,000 이하인 정수.

# 출력
  정수 배열 arr의 평균값.
*/

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution([5, 5])); // 5
