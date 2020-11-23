/*
  arr: 자연수 배열 / arr.length >= 1
  divisor: 자연수
  정수 i, j에 대해 (i !== j) 이면 (arr[i] !== arr[j]) 이다.

  >> divisor로 나누어 떨어지는 arr 요소들을 오름차순으로 정렬한 배열 return
  */

function solution(arr, divisor) {
  const answer = arr.filter((value) => value % divisor === 0);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
