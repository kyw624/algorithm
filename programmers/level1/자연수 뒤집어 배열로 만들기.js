// 자연수 n을 뒤집어 각 자릿수를 원소로 가지는 배열 리턴

// 숫자 풀이
function solution(n) {
  const answer = [];
  let copy = n;

  while (copy > 0) {
    answer.push(copy % 10);
    copy = Math.floor(copy / 10);
  }

  return answer;
}

/*
// 문자열 풀이
function solution(n) {
  const answer = [];
  const toString = n + "";

  for (let i = toString.length - 1; i >= 0; i--) {
    answer.push(parseInt(toString[i]));
  }

  return answer;
}
*/

console.log(solution(12345)); // [5, 4, 3, 2, 1]
