/*
1. 0 또는 양의 정수가 담긴 배열이 주어진다.
2. 해당 수들을 이어 붙여 만들 수 있는 가장 큰 수는?
    ex) [6, 10, 2]
        >> 가능한 수[6102, 6210, 1062, 1026, 2610, 2106]
        >> 가장 큰 수: 6210

[조건]
  - 1 <= numbers.length <= 100,000
  - 0 <= numbers 각 원소 <= 1,000
  - 문자열로 바꾸어 return

[출력]
  - numbers 배열의 정수들을 재배치해 만들 수 있는 가장 큰 수 반환.
*/

function solution(numbers) {
  const sortNumbers = numbers
    .map((num) => num + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1);

  return sortNumbers[0] === "0" ? "0" : sortNumbers.join("");
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([0, 0, 0, 0])); // "0"
