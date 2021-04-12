/*
1. JadenCase란 모든 단어의 첫 문자가 대문자인 문자열이다.
2. 문자열 s의 JadenCase로 바꾼 문자열을 구하는 문제.

[조건]
  - s는 길이 1 이상인 문자열이다.
  - s는 알파벳과 공백문자로 이루어져 있다.
  - 첫 문자가 영문이 아니라도 이어지는 영문은 소문자로.
*/

function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return typeof word.charAt(0) === "string"
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
    })
    .join(" ");
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
