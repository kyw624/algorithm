/*
콜라츠 추축: 주어진 수가 1이 될 때까지 다음 작업을 반복하면 모든 수를 1로 만들 수 있다.

1-1. 짝수라면 2로 나눈다.
1-2. 홀수라면 3을 곱하고 1을 더한다.
2. 해당 결과에 같은 작업을 1이 될 때까지 반복한다.

조건: num은 1 이상 8,000,000 미만의 정수
>> 반복 횟수 또는 500번을 반복해도 1이 되지 않는다면 -1을 반환.
*/

function solution(num) {
  let value = num;
  let count = 0;

  while (count < 500) {
    if (value === 1) return count;
    else if (value % 2 === 0) value /= 2;
    else value = value * 3 + 1;

    count++;
  }

  return -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
