/*
1. 문자열에서 반복되는 문자들을 줄여서 표현해야한다.
2. 1개 단위, 2개 단위 ... n개 단위로 잘라 압축할 때 가장 짧게 만들 수 있는 방법은?
  - abab => 2ab
  - abcbcde => a2bcde
3. 자르고 마지막에 남는 문자열은 그대로 붙인다.

[조건]
  - 1 <= s.length <= 1000
  - s는 소문자로만 이루어짐.

[출력]
  - 1개 이상 단위로 문자열을 잘라 압축해서 표현한 가장 짧은 문자열의 길이를 반환.
*/

function solution(s) {
  if (s.length === 1) return 1;

  let answer = [];
  let target = "";
  let result = "";

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let count = 1;
    target = s.substring(0, i);

    for (let j = i; j < s.length; j += i) {
      let current = s.substring(j, j + i);

      if (current === target) count++;
      else {
        if (count === 1) count = "";

        result += count + target;
        count = 1;
        target = current;
      }
    }

    if (count === 1) count = "";

    result += count + target;
    answer.push(result.length);
    result = "";
  }

  return answer.reduce((prev, curr) => (prev > curr ? curr : prev));
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17
