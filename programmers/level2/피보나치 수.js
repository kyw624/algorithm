/*
1. 피보나치 수: F(0) = 0, F(1) = 1 일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2)인 수.

[조건]
  - 1 <= n <= 100,000

[출력]
  - n번째 피보나치 수를 1234567로 나눈 나머지를 리턴.
*/

function solution(n) {
  const memo = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      memo[i] = i;
    } else {
      // 일반적인 방법으로 짤 경우 자료형 크기 제한으로 인한 오버플로우 발생.
      // 따라서 각 연산마다 나눈 값을 저장.
      memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
    }
  }

  return memo[n];
}

// 재귀함수 코드
function recursive(n) {
  const memo = new Array(n + 1);

  fibo(n, memo);

  return memo[n];
}

function fibo(n, memo) {
  if (memo[n]) return memo[n];

  if (n < 2) {
    memo[n] = n;
  } else {
    memo[n] = (fibo(n - 1, memo) + fibo(n - 2, memo)) % 1234567;
  }

  return memo[n];
}

console.log(solution(3)); // 2
console.log(recursive(3)); // 2

console.log(solution(50)); // 1093027
console.log(recursive(50)); // 1093027

console.log(solution(100)); // 963606
console.log(recursive(100)); // 963606
