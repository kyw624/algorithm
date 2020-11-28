/*
  - s: 알파벳 대소문자, 공백 조합의 문자열 (s <= 8000)
  - 1 <= n <= 25
  - 공백은 아무리 밀어도 공백
*/

function solution(s, n) {
  let ASCII = [...s].map((char) => char.charCodeAt());
  const result = ASCII.map((value) => {
    let tmp = 0;

    if (value === 32) tmp = value;
    else {
      tmp =
        value > 90
          ? ((value + n - 97) % 26) + 97 // 소문자
          : ((value + n - 65) % 26) + 65; // 대문자
    }

    return String.fromCharCode(tmp);
  }).join("");

  return result;
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
