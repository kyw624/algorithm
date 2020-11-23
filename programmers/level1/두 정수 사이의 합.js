// 두 정수 a, b 사이에 속한 모든 정수의 합을 리턴 (a, b 포함)

function solution(a, b) {
  if (a === b) return a;
  // if (a > b) [a, b] = [b, a];

  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
