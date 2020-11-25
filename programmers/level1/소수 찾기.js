// 1부터 n 사이의 소수의 개수를 반환 (n 포함)
// 2 <= n <= 1,000,000

function solution(n) {
  const isPrime = new Array(n + 1).fill(true);
  let answer = 0;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) answer++;
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
console.log(solution(17)); // 7
