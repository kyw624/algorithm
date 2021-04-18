/*
1. 알파벳 소문자로 이루어진 문자열이 주어진다.
2. 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾는다.
3. 그 둘을 제거한 뒤, 앞뒤 문자열을 이어 붙인다.
4. 이 과정을 반복하며 문자열을 모두 제거한다면 성공, 아니면 실패

ex) S = 'baabaa'
    b aa baa -> bbaa
    bb aa -> aa -> return 0

[조건]
  - 문자열의 길이: 1,000,000 이하의 자연수
  - 문자열은 모두 소문자이다.

[출력]
  - 짝지어 제거하기가 가능하다면 1, 아니면 0을 리턴.
*/

function solution(s) {
  const stack = [];
  let top = -1;

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[top] !== s[i]) {
      stack.push(s[i]);
      top++;
    } else {
      stack.pop();
      top--;
    }
  }

  return stack.length ? 0 : 1;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
