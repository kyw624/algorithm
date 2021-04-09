/*
1. 자연수 n의 다음 큰 숫자는 n보다 큰 자연수이다.
2. 자연수 n의 다음 큰 숫자와 n은 2진수로 변환 시 1의 갯수가 같다.
3. 자연수 n의 다음 큰 숫자는 위 두 조건을 만족하는 수 중 가장 작은 수이다.

[조건]
  - n은 1,000,000 이하의 자연수

[출력]
  - 자연수 n이 주어졌을 때, 조건에 만족하는 다음 큰 숫자를 리턴.
*/

function solution(n) {
  const binary = n.toString(2);
  const cnt = count(binary);
  let num = n + 1;

  while (true) {
    const currentBinary = num.toString(2);
    const currentCnt = count(currentBinary);

    if (cnt === currentCnt) return num;

    num++;
  }
}

const count = (target) => {
  let cnt = 0;

  [...target].forEach((digit) => {
    if (digit === "1") cnt++;
  });

  return cnt;
};

console.log(solution(78)); // 83
console.log(solution(15)); // 23
