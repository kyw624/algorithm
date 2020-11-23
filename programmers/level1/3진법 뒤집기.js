// 자연수 n 3진수로 -> 뒤집기 -> 10진수로
// 1 <= n <= 100,000,000 인 자연수

function solution(n) {
  let decimal = n;
  const remainders = [];

  while (decimal >= 3) {
    remainders.push(decimal % 3);
    decimal = parseInt(decimal / 3);
  }
  remainders.push(decimal); // 마지막 몫 추가

  const power = remainders.length - 1; // 거듭제곱 지수
  const answer = remainders.reduce((acc, cur, idx) => {
    if (cur === 0) {
      return acc;
    }
    return acc + 3 ** (power - idx) * cur;
  }, 0);

  return answer;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
