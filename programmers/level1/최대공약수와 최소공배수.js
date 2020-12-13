// n, m의 최대공약수와 최소공배수를 배열로 반환.
// n, m은 1이상 1,000,000이하의 자연수

function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  const answer = [];

  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  // 최대공약수(GCD) = a
  // 최소공배수(LCM) = n * m / GCD
  answer.push(a, (n * m) / a);

  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
