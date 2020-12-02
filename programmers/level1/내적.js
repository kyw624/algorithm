/*
  a와 b의 내적 리턴
    > 내적: a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
    
  1 <= a, b의 길이 <= 1000
  -1000 <= a, b의 각 요소 <= 1000
*/

function solution(a, b) {
  const answer = a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);

  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
