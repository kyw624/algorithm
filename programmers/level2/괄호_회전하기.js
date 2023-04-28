/*
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

  - (), [], {} 는 모두 올바른 괄호 문자열입니다.
  - 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다.
    예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
  - 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다.
    예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.

대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때
s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
  - s의 길이는 1 이상 1,000 이하입니다.
*/

// 회전 후 스택으로 확인

function solution(s) {
  const brackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  let str = s;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const stack = [];
    let isValid = true;

    for (let j = 0; j < str.length; j++) {
      if (Object.values(brackets).includes(str[j])) {
        stack.push(str[j]);
      } else {
        const top = stack[stack.length - 1];
        const current = brackets[str[j]];

        if (top === current) {
          stack.pop();
        } else {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && !stack.length) {
      count++;
    }

    str = str.slice(1) + str.slice(0, 1);
  }

  return count;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
