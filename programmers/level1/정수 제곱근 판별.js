// 양의 정수 n에 대해 특정 양의 정수의 제곱이면 (x+1)^2을, 아니면 -1을 리턴

function solution(n) {
  for (let i = 1; i * i <= n; i++) {
    if (i ** 2 === n) return (i + 1) ** 2;
  }

  return -1;
}

console.log(solution(121)); // 144
console.log(solution(1)); // -1
