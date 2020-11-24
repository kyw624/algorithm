/*
  s: 알파벳 문자열 (길이 50 이하의 자연수)
*/

function solution(s) {
  const string = [...s.toLowerCase()];
  let p = 0;
  let y = 0;

  string.forEach((char) => {
    if (char === "p") p++;
    else if (char === "y") y++;
  });

  return p !== y ? false : true;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
