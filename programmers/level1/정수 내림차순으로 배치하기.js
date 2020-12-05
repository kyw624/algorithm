// 정수 n의 각 자릿수를 내림차순으로 정렬해 리턴

function solution(n) {
  return parseInt([...(n + "")].sort((a, b) => b - a).join(""));
}

console.log(solution(118372)); // 873211
