/*
1. 가로 W, 세로 H인 직사각형 종이에 격자로 선이 그어짐. (격자는 1cm x 1cm 크기)
2. 직사각형의 대각선 꼭지점 2개를 잇는 방향으로 잘라 직각삼각형 2개로 나누어짐.
3. 잘라진 상태에서 사용할 수 있는 정사각형의 개수는?

[조건]
  - W, H: 1억 이하의 자연수

[출력]
  - 사용 가능한 1cm x 1cm 크기의 정사각형 개수 반환.
*/

function solution(w, h) {
  // 높이, 길이 중 하나만 1이더라도 0개
  if (w === 1 || h === 1) return 0;

  return w * h - (w + h - gcd(w, h));
}

function gcd(a, b) {
  const big = a > b ? a : b;
  let max;

  for (let i = 1; i <= big; i++) {
    if (a % i === 0 && b % i === 0) max = i;
  }

  return max;
}

console.log(solution(8, 12)); // 80
