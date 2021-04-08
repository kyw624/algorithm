/*
1. 자연수 n을 연속한 자연수들로 표현할 수 있는 방법의 수 구하기.

ex) n = 15
    >> 1 + 2 + 3 + 4 + 5 = 15
    >> 4 + 5 + 6 = 15
    >> 7 + 8 = 15
    >> 15 = 15
*/

function solution(n) {
  let count = 1; // n이 자기 자신일 때
  let sum;

  for (let i = 1; i < n; i++) {
    sum = i;

    for (let j = i + 1; j <= n; j++) {
      sum += j;

      if (sum >= n) break;
    }

    if (sum === n) count++;
  }

  return count;
}

console.log(solution(15));
