/*
# 하샤드 수?
  - 양의 정수 x의 각 자릿수 합으로 x가 나누어진다면 x는 하샤드 수.

# 조건
  - x는 1 이상, 10,000 이하인 정수.

# 출력
  x가 하샤드 수라면 true, 아니면 false 반환.
*/

// 문자열 풀이
function solution(x) {
  const sum = [...String(x)].reduce((acc, cur) => acc + parseInt(cur), 0);

  return x % sum === 0 ? true : false;
}

// 정수 풀이
function solution(x) {
  let num = x;
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }

  return x % sum === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(11)); // false
console.log(solution(12)); // true
console.log(solution(13)); // false
