// 2504 - 괄호의 값

/*
  1. 열린 괄호 들어오면 push
  2. 닫힌 괄호 들어오면 스택의 top 체크
    2-1. 열린 괄호면 해당하는 숫자 push
    2-2. 숫자면 열린 괄호 만날 때 까지 숫자들 더하기
         괄호 만나면 더한 숫자에 해당하는 숫자 곱하고 push 
*/

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("");

function solution(brackets) {
  const bracketPairs = {
    ")": "(",
    "]": "[",
  };
  const check = []; // 올바른 괄호 쌍 체크용
  const stack = [];

  for (const bracket of brackets) {
    if (bracket === "(" || bracket === "[") {
      check.push(bracket);
      stack.push(bracket);
    } else {
      if (
        check.length === 0 ||
        check[check.length - 1] !== bracketPairs[bracket]
      ) {
        // 예외처리
        return 0;
      } else {
        check.pop();
      }

      if (stack[stack.length - 1] === "(" || stack[stack.length - 1] === "[") {
        const convertedNumber = stack[stack.length - 1] === "(" ? 2 : 3;
        stack[stack.length - 1] = convertedNumber;
      } else {
        let result = 0;

        while (true) {
          const pop = stack.pop();

          if (typeof pop === "number") {
            result += pop;
          } else if (pop === bracketPairs[bracket]) {
            const number = pop === "(" ? 2 : 3;
            stack.push(result * number);
            break;
          }
        }
      }
    }
  }

  if (check.length !== 0) return 0;

  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
