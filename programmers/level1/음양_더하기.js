/*
정수들의 절댓값을 차례대로 담은 정수 배열 absolutes,
이 정수들의 부호를 차례대로 담은 boolean 배열 signs이 매개변수로 주어진다.
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

[조건]
  - 1,000 >= absolutes.length >= 1
  - 1,000 >= absolutes.value >= 1
  - signs.length === absolutes.length
  - signs[i] === true  >> absolutes[i]는 양수
                 false >> 음수

*/

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    return acc + (signs[idx] ? cur : -cur);
  }, 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
