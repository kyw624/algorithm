/*
1. 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 수를 구하려한다. (순서는 그대로)
2. 1924에서 2개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있고, 가장 큰 수는 94.
3. 파라미터
  - number: 문자열 형식의 숫자
  - k: 제거할 수의 개수

[조건]
  - 1 <= number.length <= 1,000,000
  - 1 <= k < number.length

[출력]
  - number에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 문자열 형태로 return.
*/

function solution(number, k) {
  const array = number.split("");
  const stack = [];
  let count = k;
  let top;

  for (let current of array) {
    if (stack.length === 0) {
      stack.push(current);
      top = 0;
    } else {
      while (current > stack[top] && count > 0) {
        stack.pop();
        count--;
        top--;
      }

      stack.push(current);
      top++;
    }
  }

  return count > 0
    ? stack.slice(0, stack.length - count).join("")
    : stack.join("");
}

console.log(solution("1924", 2)); // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
console.log(solution("5432", 2)); // "5432"
