// n의 길이만큼 '수박수박수...' 패턴의 문자열 리턴

function solution(n) {
  let str = "수";

  for (let i = 1; i < n; i++) {
    str += i % 2 === 0 ? "수" : "박";
  }

  return str;
}

console.log(solution(2));
