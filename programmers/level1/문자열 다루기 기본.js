// s: 1 이상 8 이하 길이의 문자열

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  const toArray = [...s];

  for (let i = 0; i < toArray.length; i++) {
    if (!Number.isInteger(parseInt(toArray[i]))) return false;
  }

  return true;
}

console.log(solution("a234"));
console.log(solution("1234"));
