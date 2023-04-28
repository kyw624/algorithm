/*
효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다.
칸이 총 4개 있을 때, 효진이는
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)
의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다.

멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내,
여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

[제한 사항]
  - n은 1 이상, 2000 이하인 정수입니다.
*/

// DP (오버플로우 방지)
function solution(n) {
  const dp = Array(n + 1).fill();

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

// DP (BigInt)
function solution2(n) {
  const dp = Array(n + 1).fill();

  dp[0] = 0;
  dp[1] = 1n;
  dp[2] = 2n;

  for (let i = 3; i <= n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n] % BigInt(1234567);
}

// 재귀 (효율 떨어짐)
function fibo(n) {
  if (n <= 2) {
    return n;
  }

  return (fibo(n - 1) + fibo(n - 2)) % 1234567;
}

console.log(fibo(4)); // 5
console.log(fibo(3)); // 3
console.log(solution(2000)); // 694725
