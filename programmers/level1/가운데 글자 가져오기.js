// 1 <= s <= 100

function solution(s) {
  const length = s.length;
  const half = length / 2;

  if (length % 2 == 0) {
    return s[half - 1] + s[half];
  }

  return s[parseInt(half)];
}

solution("abcde"); // "c"
solution("qwer"); // "we"
