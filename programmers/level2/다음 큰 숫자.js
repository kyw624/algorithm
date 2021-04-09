/*
1. 자연수 n의 다음 큰 숫자는 n보다 큰 자연수이다.
2. 자연수 n의 다음 큰 숫자와 n은 2진수로 변환 시 1의 갯수가 같다.
3. 자연수 n의 다음 큰 숫자는 위 두 조건을 만족하는 수 중 가장 작은 수이다.

[조건]
  - n은 1,000,000 이하의 자연수

[출력]
  - 자연수 n이 주어졌을 때, 조건에 만족하는 다음 큰 숫자를 리턴.
*/

function solution(n) {
  const cnt = n.toString(2).match(/1/g).length;
  let num = n + 1;

  while (true) {
    if (cnt === num.toString(2).match(/1/g).length) return num;

    num++;
  }
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
