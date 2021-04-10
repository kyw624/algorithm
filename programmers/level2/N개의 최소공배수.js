/*
1. 배열 arr이 주어졌을 때 이 수들의 최소공배수를 구하는 문제.
  ex) [2, 6, 8, 14]
    - 2와 6의 최소공배수 = A
    - A와 8의 최소공배수 = B
    - return B와 14의 최소공배수

[조건]
  - arr의 길이: 1 이상, 15 이하인 배열
  - arr의 원소: 100 이하의 자연수

[출력]
  - N개의 수의 최소공배수 리턴.
*/

function solution(arr) {
  const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
  };

  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
