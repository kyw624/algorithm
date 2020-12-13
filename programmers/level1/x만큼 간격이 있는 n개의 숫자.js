/*
[조건]
  - x는 -10,000,000 이상, 10,000,000 이하인 정수입니다.
  - n은 1000 이하인 자연수입니다.

[출력]
  정수 x부터 x씩 증가하는 n개의 리스트 반환.  
*/

function solution(x, n) {
  return new Array(n).fill(x).map((num, index) => num * (index + 1));
}

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12]
console.log(solution(-4, 2)); // [-4, -8]
