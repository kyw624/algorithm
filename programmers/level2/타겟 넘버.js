/*
1. n개의 음이 아닌 정수를 적절히 더하거나 빼서 타겟 넘버를 만드는 문제.
2. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만드려면 5가지 방법이 있다.
  1) -1+1+1+1+1 = 3
  2) +1-1+1+1+1 = 3
  3) +1+1-1+1+1 = 3
  4) +1+1+1-1+1 = 3
  5) +1+1+1+1-1 = 3

[조건]
  - 주어지는 숫자들의 배열 numbers의 길이는 2개 이상 20개 이하.
  - 각 숫자는 1 이상 50 이하인 자연수.
  - 타겟 넘버 target은 1 이상 1000 이하인 자연수.
*/

function solution(numbers, target) {
  let answer = 0;

  recursive(0, 0);

  return answer;

  function recursive(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      }

      return;
    }

    recursive(idx + 1, sum + numbers[idx]);
    recursive(idx + 1, sum - numbers[idx]);
  }
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
